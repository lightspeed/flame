const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const prettier = require('prettier');
const prettierConfig = require('../../../prettier.config');

delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'typescript';

const svgDirPath = `./src/`;
const iconsDirPath = `./src/`;
const iconList = {};
const componentIconNames = [];
const spriteSvg = [];

if (!fs.existsSync(iconsDirPath)) {
  fs.mkdirSync(path.resolve(iconsDirPath));
}

fs.readdir(svgDirPath, (err, svgPaths) => {
  if (err) throw err;

  const fullSvgPaths = svgPaths
    .filter(svgPath => /icon-.+?\.svg/.test(svgPath) && svgDirPath + svgPath)
    .map(svgPath => svgDirPath + svgPath);
  Promise.all(
    fullSvgPaths.map(
      svgPath =>
        new Promise(resolve => {
          fs.readFile(svgPath, 'utf8', (moduleErr, svg) => {
            const iconName = svgPath.replace(/.+?\/icon-(.+?)\.svg/, '$1');
            const componentIconName = _.upperFirst(_.camelCase(iconName));

            spriteSvg.push(
              svg
                .replace(/<\/?svg(?:\s.+?)?>/g, '')
                .replace(/id="((base|details)-\d)"/g, 'style="fill: var(--cr-icon-$1-fill)"')
                .replace(/fill-rule=/g, 'fillRule=')
                .replace(/<g.*?>/, `<symbol id="cr-icon-${iconName}">`)
                .replace(/<\/g>(?!.*<\/g>)/, '</symbol>')
                .trim(),
            );
            iconList[iconName] = {
              modifiers: svg
                .match(/((base|details)-\d)/g)
                .sort()
                .filter((value, index, self) => self.indexOf(value) === index),
              svg,
            };

            componentIconNames.push(componentIconName);

            resolve();
          });
        }),
    ),
  ).then(() => {
    try {
      fs.writeFileSync(
        `${iconsDirPath}spritesheet.svg`,
        prettier
          .format(`<svg style="display: none">${spriteSvg.sort().join('')}</svg>`)
          .replace(/;/, '')
          .replace(/className/g, 'class'),
        () => {},
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('e', e);
    }

    fs.writeFileSync(
      `${iconsDirPath}Icon.list.json`,
      JSON.stringify(
        _(iconList)
          .toPairs()
          .sortBy(0)
          .fromPairs()
          .value(),
        null,
        2,
      ),
      () => {},
    );
  });
});
