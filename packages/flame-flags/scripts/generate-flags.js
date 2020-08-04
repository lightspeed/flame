const fs = require('fs-extra');
const prettier = require('prettier');
const _ = require('lodash');
const flagIsoList = require('../src/flag-iso.list.json');
const prettierConfig = require('../../../prettier.config');

// This "overrides" key is giving Unknown option warning
delete prettierConfig.overrides;
// TODO: use prettier.resolveConfigFile instead...
prettierConfig.parser = 'babel';

const svgDirPath = `./src/`;
const componentFlagISOs = [];
const spriteSvg = [];

const flagList = flagIsoList.reduce((acc, value) => {
  acc[value.code] = {
    code: value.code,
    name: value.name,
    svg: '',
  };
  return acc;
}, {});

fs.ensureDirSync('./dist/');

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

            const flagSVG = svg
              .replace(/<svg(?:\s.+?)?>/, `<symbol id="fl-flag-${flagISO}">`)
              .replace(/<\/svg>/, `</symbol>`)
              .trim();
            spriteSvg.push({
              sortKey: flagISO.toLowerCase(),
              svg: flagSVG,
            });

            componentFlagISOs.push(componentFlagISO);
            if (flagList[flagISO]) {
              flagList[flagISO].svg = svg;
            }
            resolve();
          });
        }),
    ),
  ).then(() => {
    fs.writeFile(`dist/Flag.list.json`, JSON.stringify(flagList));
    fs.writeFile(
      `dist/spritemap.svg`,
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
  });
});
