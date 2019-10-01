const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const HTMLtoJSX = require('htmltojsx');
const _ = require('lodash');
const prettierConfig = require('../../../prettier.config');

// This "overrides" key is giving Unknown option warning
delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'babel';

const svgDirPath = `./svg/Flags/`;
const sourceDirPath = './src/Flag';
const flagsDirPath = `${sourceDirPath}`;
const componentFlagISOs = [];
const spriteSvg = [];

// Used to replace SVG html attributes into JSX, ex: xlink:href -> xlinkHref
const converter = new HTMLtoJSX({ createClass: false });

if (!fs.existsSync(flagsDirPath)) {
  fs.mkdirSync(flagsDirPath);
}

fs.createReadStream('./svg/flag.list.json').pipe(fs.createWriteStream('./src/Flag/flag.list.json'));

fs.readdir(svgDirPath, (err, svgPaths) => {
  if (err) throw err;

  const fullSvgPaths = svgPaths
    .filter(svgPath => /\.svg/.test(svgPath) && svgDirPath + svgPath)
    .map(svgPath => svgDirPath + svgPath);

  Promise.all(
    fullSvgPaths.map(
      svgPath =>
        new Promise(resolve => {
          fs.readFile(svgPath, 'utf8', (moduleErr, svg) => {
            const flagISO = svgPath.replace(/.+?([^/]+)\.svg/i, '$1').replace(/\s|\(.+?\)/g, '');

            const componentFlagISO = flagISO.replace('-', '_');
            const componentSvg = converter
              .convert(svg)
              .replace(
                /<svg (.+?)>/,
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" {...rest}>',
              );

            const component = `
import * as React from 'react';
import styled from '@emotion/styled';
import setFlagStyle, { FlagStyleProps } from './utils/setFlagStyle';

const ${componentFlagISO} = ({ ...rest }) => (${componentSvg});
const StyledFlag = styled(${componentFlagISO})\`
  \${(props: any) => setFlagStyle(props)}
\`;

StyledFlag.defaultProps = {
  size: '1rem',
};

StyledFlag.displayName = 'Flag${componentFlagISO}';

export type Flag${componentFlagISO}Props = FlagStyleProps;
export { StyledFlag as Flag${componentFlagISO} };`;

            fs.writeFile(
              `${flagsDirPath}/${componentFlagISO}.tsx`,
              prettier.format(component, prettierConfig),
              () => {},
            );

            spriteSvg.push({
              sortKey: flagISO.toLowerCase(),
              svg: svg
                .replace(/<svg(?:\s.+?)?>/, `<symbol id="cr-flag-${flagISO}">`)
                .replace(/<\/svg>/, `</symbol>`)
                .trim(),
            });

            componentFlagISOs.push(componentFlagISO);

            resolve();
          });
        }),
    ),
  ).then(() => {
    fs.writeFile(
      `${flagsDirPath}/index.tsx`,
      prettier.format(
        `
        import FlagFactory, { FlagProps } from './utils/FlagFactory';
        import flaglist from './flag.list.json';

        ${componentFlagISOs
          .map(
            componentFlagISO =>
              `import { Flag${componentFlagISO} as ${componentFlagISO} } from './${componentFlagISO}';`,
          )
          .sort()
          .join('')}

          const Flags = {
            ${componentFlagISOs.sort().join(',')}
          }

          const Flag = FlagFactory(Flags, flaglist);
          export { Flag, FlagProps };
          `,
        prettierConfig,
      ),
      () => {},
    );

    fs.writeFile(
      `svg/flag-sprite.svg`,
      prettier
        .format(
          `<svg style="display: none">${_.sortBy(spriteSvg, 'sortKey')
            .map(flag => flag.svg)
            .join('')}</svg>`,
        )
        .replace(/;/, '')
        .replace(/className/g, 'class'),
      () => {},
    );

    fs.copySync(path.resolve(__dirname, '../svg/Flags'), path.resolve(__dirname, '../src/Flag'));
    fs.copySync(
      path.resolve(__dirname, '../svg/flag-sprite.svg'),
      path.resolve(__dirname, '../src/Flag/flag-sprite.svg'),
    );
  });
});
