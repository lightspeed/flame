/* eslint-disable no-console */
/**
 * Since we don't use lerna for publising Flame, we need to skip its release.
 *
 * This script will verify if a new tag has been created, thus confirming
 * that a new release needs to be published for `@lightspeed/flame`.
 *
 * If not, skip the process for `yarn release` in this package (this is why we have
 * `|| exit 0`) but still run `git push --follow-tags` in the root `yarn release`.
 *
 */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function hasFlamePackageTag() {
  const { stdout, stderr } = await exec('git tag -l --contains HEAD');

  if (stderr) {
    console.error('Something went wrong');
    process.exit(1);
  }

  if (!stdout.includes('@lightspeed/flame@')) {
    console.log('Skipping @lightspeed/flame release as there is no new tags');
    process.exit(1);
  }
}

hasFlamePackageTag();
