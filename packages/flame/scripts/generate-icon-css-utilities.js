const fs = require('fs');
const tokens = require('@lightspeed/flame-tokens');

// @TODO: export this from global helper functions
const namespace = 'cr-';
const classToProperty = {
  'icon-base-1': '--cr-icon-base-1-fill',
  'icon-base-2': '--cr-icon-base-2-fill',
  'icon-details-1': '--cr-icon-details-1-fill',
  'icon-details-2': '--cr-icon-details-2-fill',
};

const baseCssClass = `
.cr-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: text-bottom;

  --cr-icon-details-1-fill: none;
  --cr-icon-details-2-fill: #fff;
}
`;

// @TODO: export this from global helper functions
function prefixName(name, prefix = namespace) {
  return `${prefix}${name}`;
}

// @TODO: export this from global helper functions
function generateClasses({ separator = '', property, data, noSassVars = false }) {
  const selector = name =>
    separator ? `.${namespace}${separator}-${name}` : `.${prefixName(name)}`;
  const colorify = name => (noSassVars ? tokens.colors.colorsMap[name] : `$${prefixName(name)}`);

  return Object.keys(data).reduce((output, name) => {
    return `${output}${selector(name)} { ${property}: ${colorify(name)}; }\n`;
  }, '');
}

const sass = Object.keys(classToProperty)
  .map(name =>
    generateClasses({
      separator: name,
      property: classToProperty[name],
      data: tokens.colors.colorsMap,
    }),
  )
  .join('\n');

// Write as sass
const sassOutput = `@import '@lightspeed/flame-tokens/index.scss';\n${sass}${baseCssClass}`;
fs.writeFileSync(`./svg/Icons/icon.scss`, sassOutput, 'utf8');

// Write as css...
const css = Object.keys(classToProperty)
  .map(name =>
    generateClasses({
      separator: name,
      property: classToProperty[name],
      data: tokens.colors.colorsMap,
      noSassVars: true,
    }),
  )
  .join('\n');

const cssOutput = `${css}${baseCssClass}`;
fs.writeFileSync(`./svg/Icons/icon.css`, cssOutput, 'utf8');
