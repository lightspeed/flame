/**
 * Flame' main package uses a custom npm publish folder, which goes
 * against lerna's way. We need to publish with a custom command.
 *
 * Since lerna won't publish private package, this script will go into
 * the `dist` folder where we publish from and replace `private: false`
 * to `private: true` when we use flame' custom `yarn release` command.
 *
 * > Lerna will never publish packages which are marked as private
 * > ("private": true in the package.json).
 * > https://github.com/lerna/lerna/tree/master/commands/publish#usage
 *
 */
const fs = require('fs-extra');

const distPackageToPublic = async () => {
  const packagePath = './dist/package.json';
  const packageContent = await fs.readFile(packagePath, 'utf-8');
  const newPackageContent = packageContent.replace('"private": true,', '"private": false,');
  return fs.writeFile(packagePath, newPackageContent, 'utf-8', error => {
    if (error) throw error;
  });
};

distPackageToPublic();
