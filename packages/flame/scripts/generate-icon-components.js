const fs = require('fs-extra');
const prettier = require('prettier');
const _ = require('lodash');
const icons = require('@lightspeed/flame-icons/dist/Icon.list.json');

const prettierConfig = require('../../../prettier.config');

delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'typescript';

const colors = [
  'baseColor',
  'baseColor1',
  'detailsColor',
  'detailsColor1',
  'baseColor2',
  'detailsColor2',
];
const componentIconNames = [];

Object.entries(icons).forEach(([key, value]) => {
  const componentIconName = _.upperFirst(_.camelCase(key));
  const componentSvg = value.svg
    .replace(/<svg (.+?)>/, '<svg {...rest} fill={color}>')
    .replace(/ fill="(.+?)"/g, '')
    .replace(
      /id="((base|details)-(\d))"/g,
      'className="cr-icon__$2 cr-icon__$1" fill={$2Color || $2Color$3}',
    )
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/<\/?g(?:\s.+?)?>/g, '');

  const fills = {};

  colors.forEach(name => {
    if (!/\d/.test(name)) return;

    const type = name.replace('Color', '-');
    const typeRegex = new RegExp(`<[^<]+?id="${type}".*?>`);
    value.svg.replace(typeRegex, match => {
      match.replace(/fill="(.+?)"/, (matchFill, fillColor) => {
        fills[name] = fillColor;
      });
    });
  });

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
export { NextIcon as Icon${componentIconName} };
 `;

  componentIconNames.push(componentIconName);

  console.log(`Building icon "${key}"...`);
  fs.writeFileSync(
    `src/Icon/${componentIconName}.tsx`,
    prettier.format(component, prettierConfig),
    () => {},
  );
});

console.log(`Building out index helper file`);

fs.writeFileSync(
  `src/Icon/index.tsx`,
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
