const fs = require('fs-extra');
const prettier = require('prettier');
const HTMLtoJSX = require('htmltojsx');
const flagList = require('@lightspeed/flame-flags/src/Flag.list.json');
const prettierConfig = require('../../../prettier.config');

// This "overrides" key is giving Unknown option warning
delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'babel';

const flagsDirPath = './src/Flag';
const componentFlagISOs = [];

// Used to replace SVG html attributes into JSX, ex: xlink:href -> xlinkHref
const converter = new HTMLtoJSX({ createClass: false });

Object.entries(flagList).forEach(([, value]) => {
  const componentFlagISO = value.code.replace('-', '_');
  const componentSvg = converter
    .convert(value.svg)
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

  console.log(`Building out flag "${value.code} (${value.name})"...`);
  fs.writeFile(
    `${flagsDirPath}/${componentFlagISO}.tsx`,
    prettier.format(component, prettierConfig),
    () => {},
  );

  componentFlagISOs.push(componentFlagISO);
});

console.log(`Building out index helper file`);

fs.writeFile(
  `${flagsDirPath}/index.tsx`,
  prettier.format(
    `
    import FlagFactory, { FlagProps } from './utils/FlagFactory';
    import flaglist from '@lightspeed/flame-flags/src/flag-iso.list.json';

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
/*
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
  });
});
*/
