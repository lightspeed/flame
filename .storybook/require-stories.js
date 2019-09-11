const glob = require('glob');

module.exports = function noop() {};
module.exports.pitch = function pitch() {
  const makeRequire = storyPath => `require(${JSON.stringify(storyPath)});`;
  const storybookFiles = glob.sync(`${process.cwd()}/packages/**/story.+(js|tsx)`);
  const tokensIndex = storybookFiles.findIndex(file => file.includes('tokens/story.tsx'));
  const storyRequireStatements = [
    storybookFiles[tokensIndex],
    ...storybookFiles.slice(0, tokensIndex),
    ...storybookFiles.slice(tokensIndex + 1),
  ]
    .map(makeRequire)
    .join('\n');

  return storyRequireStatements;
};
