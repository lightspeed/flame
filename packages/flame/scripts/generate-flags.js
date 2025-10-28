const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const _ = require('lodash');
const prettierConfig = require('../../../prettier.config');

// This "overrides" key is giving Unknown option warning
delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'babel';

// Function to sanitize SVG attributes for JSX compatibility
const sanitizeSvgForJsx = svg => {
  return (
    svg
      // Remove xmlns:xlink attribute (not needed in JSX)
      .replace(/\s*xmlns:xlink="[^"]*"/g, '')
      // Convert class to className
      .replace(/\sclass=/g, ' className=')
      // Convert all kebab-case and colon-separated attributes to camelCase
      // e.g., stroke-width -> strokeWidth, xlink:href -> xlinkHref
      .replace(/\b([a-z]+)([-:][a-z-:]+)=/g, (match, p1, p2) => {
        const camelCase = p1 + p2.replace(/[-:]([a-z])/g, (_0, letter) => letter.toUpperCase());
        return `${camelCase}=`;
      })
      // Convert non-string primitives to JSX expressions
      // Only integers and booleans, keep decimals as strings
      // e.g., width="16" -> width={16}, r="3.5" -> r="3.5"
      .replace(/\b([a-zA-Z][a-zA-Z0-9]*)="([^"]*)"/g, (match, attr, value) => {
        // Check if it's an integer (not a decimal)
        if (/^-?\d+$/.test(value)) {
          return `${attr}={${value}}`;
        }
        // Check if it's a boolean or null
        if (value === 'true' || value === 'false' || value === 'null') {
          return `${attr}={${value}}`;
        }
        // Otherwise (including decimals), keep as string
        return match;
      })
      // Convert style attributes to JSX style objects
      .replace(/style="([^"]*)"/g, (match, styleContent) => {
        // Parse CSS properties and convert to camelCase object notation
        const styles = styleContent
          .split(';')
          .filter(s => s.trim())
          .map(prop => {
            const [key, value] = prop.split(':').map(s => s.trim());
            if (!key || !value) return '';
            // Convert kebab-case to camelCase
            const camelKey = key.replace(/-([a-z])/g, (_0, letter) => letter.toUpperCase());
            return `${camelKey}: '${value}'`;
          })
          .filter(s => s)
          .join(', ');
        return styles ? `style={{ ${styles} }}` : '';
      })
  );
};

const svgDirPath = `./svg/Flags/`;
const sourceDirPath = './src/Flag';
const flagsDirPath = `${sourceDirPath}`;
const componentFlagISOs = [];
const spriteSvg = [];

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
            // Sanitize SVG attributes and replace the opening svg tag
            const componentSvg = sanitizeSvgForJsx(svg).replace(
              /<svg\s+[^>]*>/i,
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
