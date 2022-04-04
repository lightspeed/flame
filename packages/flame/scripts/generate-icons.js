const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const prettier = require('prettier');
const prettierConfig = require('../../../prettier.config');

delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'typescript';

const svgDirPath = `./svg/Icons/`;
const iconsDirPath = `./src/Icon/`;
const iconList = {};
const componentIconNames = [];
const spriteSvg = [];
const colors = [
  'baseColor',
  'baseColor1',
  'detailsColor',
  'detailsColor1',
  'baseColor2',
  'detailsColor2',
];

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
            const fills = {};
            const iconName = svgPath.replace(/.+?\/icon-(.+?)\.svg/, '$1');
            const componentIconName = _.upperFirst(_.camelCase(iconName));

            colors.forEach(name => {
              if (!/\d/.test(name)) return;

              const type = name.replace('Color', '-');
              const typeRegex = new RegExp(`<[^<]+?id="${type}".*?>`);
              svg.replace(typeRegex, match => {
                match.replace(/fill="(.+?)"/, (matchFill, fillColor) => {
                  fills[name] = fillColor;
                });
              });
            });

            const componentSvg = svg
              .replace(/<svg (.+?)>/, '<svg {...rest} fill={color}>')
              .replace(/ fill="(.+?)"/g, '')
              .replace(
                /id="((base|details)-(\d))"/g,
                'className="cr-icon__$2 cr-icon__$1" fill={$2Color || $2Color$3}',
              )
              .replace(/fill-rule=/g, 'fillRule=')
              .replace(/clip-rule=/g, 'clipRule=')
              .replace(/<\/?g(?:\s.+?)?>/g, '');

            const component = `
/* eslint-disable no-unused-vars */
import * as React from 'react';
import iconFactory, { IconProps } from './utils/iconFactory';

const ${componentIconName}: React.FC<IconProps> = ({
color,
${colors.map(name => `${name}${fills[name] ? `="${fills[name]}"` : ''}`).join(',')}
, ...rest }) => (${componentSvg});

const NextIcon = iconFactory(${componentIconName}, 'Icon${componentIconName}');
export type Icon${componentIconName}Props = IconProps;
export { NextIcon as Icon${componentIconName} };`;

            fs.writeFile(
              `${iconsDirPath}${componentIconName}.tsx`,
              prettier.format(component, prettierConfig),
              () => {},
            );

            spriteSvg.push(
              svg
                .replace(/<\/?svg(?:\s.+?)?>/g, '')
                .replace(/id="((base|details)-\d)"/g, 'style="fill: var(--cr-icon-$1-fill)"')
                .replace(/fill-rule=/g, 'fillRule=')
                .replace(/clip-rule=/g, 'clipRule=')
                .replace(/<g.*?>/, `<symbol id="cr-icon-${iconName}">`)
                .replace(/<\/g>(?!.*<\/g>)/, '</symbol>')
                .trim(),
            );
            iconList[iconName] = svg
              .match(/((base|details)-\d)/g)
              .sort()
              .filter((value, index, self) => self.indexOf(value) === index);

            componentIconNames.push(componentIconName);

            resolve();
          });
        }),
    ),
  ).then(() => {
    fs.writeFileSync(
      `${iconsDirPath}index.tsx`,
      prettier.format(
        `
        import * as React from 'react';
        import camelCase from 'lodash/camelCase';
        import upperFirst from 'lodash/upperFirst';

        import { IconProps } from './utils/iconFactory';

        ${componentIconNames
          .map(
            componentIconName =>
              `import { Icon${componentIconName} as ${componentIconName} } from './${componentIconName}';`,
          )
          .sort()
          .join('')}

          const Icons = {
            ${componentIconNames.sort().join(',')}
          } as { [key: string]: React.FC<IconProps> };

          const Icon: React.FC<IconProps & { name: string }> = ({ name, ...restProps }) => {
            const NextIcon = name && Icons[upperFirst(camelCase(name))];
            if (NextIcon) {
              return <NextIcon {...restProps} />;
            }

            return null;
          };

          // TODO: Get rid of this... but it's not as simple as just deleting it.
          // Only the Button uses this flameName. However, importing the Icon
          // into the Button can potentially cause it to import THE ENTIRE ICON lib, on top of
          // the one that gets bundled by the spinner!
          // We might have to create a new type of Icon within Button, in order to get proper treeshaking.
          // For the sake of keeping the same API, leave it here for now.
          // @ts-ignore
          Icon.flameName = 'Icon';

          export { Icon, IconProps };
          `,
        prettierConfig,
      ),
      () => {},
    );

    try {
      fs.writeFileSync(
        `svg/icon-sprite.svg`,
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

    fs.writeFileSync(
      `svg/Icon.list.json`,
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

    fs.copySync(path.resolve(__dirname, '../svg/Icons'), path.resolve(__dirname, '../src/Icon'));
    fs.copySync(
      path.resolve(__dirname, '../svg/icon-sprite.svg'),
      path.resolve(__dirname, '../src/Icon/icon-sprite.svg'),
    );
  });
});
