/* eslint-disable import/no-extraneous-dependencies, no-console */
// eslint-disable-next-line prefer-destructuring
const exec = require('child-process-promise').exec;
const fs = require('fs-extra');
const formatDate = require('./utils/format-date');

/**
 * Using `lerna changed` to get list of all changed packages in JSON format
 * with the `--json` option. Running it with `npx` since both `yarn` and `npm`
 * shows extra outputs when running commands.
 *
 * Map through list of changed packages and replace `[Unreleased]` with
 * new version and date.
 *
 * This script is ran as a npm-scripts `version` hook, so we can get the
 * upcoming package version bump but before the commit is completed:
 *
 * > version: Run AFTER bumping the package version, but BEFORE commit.
 *
 * See https://github.com/lerna/lerna/tree/master/commands/version#--commit-hooks
 */

const listChangedPackages = async () => {
  const { stdout } = await exec('npx lerna changed -a --json');

  const changedPackages = JSON.parse(stdout);
  if (!changedPackages.length) {
    throw new Error('No packages changed.');
  }

  return changedPackages;
};

const editChangelogs = changedPackages =>
  Promise.all(
    changedPackages.map(async changedPackage => {
      const changelogPath = `${changedPackage.location}/CHANGELOG.md`;
      const changelogContent = await fs.readFile(changelogPath, 'utf-8');
      const unreleasedString = '[Unreleased]';

      let newChangelogContent = '';

      // When there is no unreleased block, we detect the change as version bump.
      if (!changelogContent.includes(unreleasedString)) {
        // Use the first version heading (`##`) as a position matcher to insert version bump section
        const versionBumpString = '##';
        const versionBumpPosition = changelogContent.indexOf(versionBumpString);
        newChangelogContent = [
          changelogContent.slice(0, versionBumpPosition),
          `## ${changedPackage.version} - ${formatDate()}\n\n- Version bump because lerna\n\n`,
          changelogContent.slice(versionBumpPosition),
        ].join('');
      } else {
        newChangelogContent = changelogContent.replace(
          unreleasedString,
          `${changedPackage.version} - ${formatDate()}`,
        );
      }

      return fs.writeFile(changelogPath, newChangelogContent, 'utf-8');
    }),
  );

const gitAddChangelogs = () => exec('git add .');

const handleErrors = err => {
  console.error(`${err.message}`);
  process.exit(1);
};

listChangedPackages()
  .then(editChangelogs)
  .then(gitAddChangelogs)
  .catch(handleErrors);
