const fs = require('fs-extra');

const isFolder = s => {
  return fs.lstatSync(s).isDirectory();
};
const whitelist = /.*(.json|.sass)/;
const isInWhitelist = s => whitelist.test(s);

fs.copySync('./src/', './dist/', {
  filter: src => {
    return isInWhitelist(src) || isFolder(src);
  },
});

fs.copySync('./src/', './dist/esm', {
  filter: src => {
    return isInWhitelist(src) || isFolder(src);
  },
});

fs.copySync('./package.json', './dist/package.json');
fs.copySync('./CHANGELOG.md', './dist/CHANGELOG.md');
fs.copySync('./README.md', './dist/README.md');
fs.copySync('./LICENSE', './dist/LICENSE');
fs.copySync('./.npmignore', './dist/.npmignore');
fs.copySync('./svg', './dist/svg');
