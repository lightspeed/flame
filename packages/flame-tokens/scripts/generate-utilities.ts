import { typography, spacing, colors, shadows, radii, transition } from '../src';
import { namespace } from './config';

const tokens = { typography, spacing, colors, shadows, radii, transition };
function prefixName(name: string, prefix = namespace) {
  return `${prefix}${name}`;
}

interface GenerateClasses {
  separator?: string;
  property: string;
  data: any;
}
function generateClasses({ separator = '', property, data }: GenerateClasses) {
  const selector = (name: string) =>
    separator ? `.${namespace}${separator}-${name}` : `.${prefixName(name)}`;

  return Object.keys(data).reduce(
    (output, name) => `${output}${selector(name)} { ${property}: $${prefixName(name)}; }\n`,
    '',
  );
}

function generateSpacing() {
  const { multipliers } = tokens.spacing;
  const scale = Object.keys(tokens.spacing.scale);
  const types = ['margin', 'padding'];
  const sides = ['top', 'left', 'right', 'bottom'];
  const allSides = types
    .map(type => {
      const typeAbbr = type.substring(0, 1);
      let multiplier = 0;
      return scale.reduce((output, name) => {
        const scaleNum = multipliers[multiplier];
        multiplier += 1;
        return `${output}.${prefixName(`${typeAbbr}-${scaleNum}`)} { ${type}: $${prefixName(
          name,
        )}; }\n`;
      }, '');
    })
    .join('');
  const perSides = types
    .map(type => {
      const typeAbbr = type.substring(0, 1);
      return sides
        .map(side => {
          const sideAbbr = side.substring(0, 1);
          let multiplier = 0;
          return scale.reduce((output, name) => {
            const scaleNum = multipliers[multiplier];
            multiplier += 1;
            return `${output}.${prefixName(
              `${typeAbbr}${sideAbbr}-${scaleNum}`,
            )} { ${type}-${side}: $${prefixName(name)}; }\n`;
          }, '');
        })
        .join('');
    })
    .join('');
  const verticals = types
    .map(type => {
      const typeAbbr = type.substring(0, 1);
      let multiplier = 0;
      return scale.reduce((output, name) => {
        const scaleNum = multipliers[multiplier];
        multiplier += 1;
        return `${output}\n.${prefixName(`${typeAbbr}v-${scaleNum}`)} {
  ${type}-top: $${prefixName(name)};
  ${type}-bottom: $${prefixName(name)};
}\n`;
      }, '');
    })
    .join('');
  const horizontals = types
    .map(type => {
      const typeAbbr = type.substring(0, 1);
      let multiplier = 0;
      return scale.reduce((output, name) => {
        const scaleNum = multipliers[multiplier];
        multiplier += 1;
        return `${output}\n.${prefixName(`${typeAbbr}h-${scaleNum}`)} {
  ${type}-left: $${prefixName(name)};
  ${type}-right: $${prefixName(name)};
}\n`;
      }, '');
    })
    .join('');
  return `${allSides}${perSides}${verticals}${horizontals}`;
}

function generateColorsFile() {
  return [
    generateClasses({ property: 'color', data: tokens.colors.colorsMap }),
    generateClasses({
      separator: 'bg',
      property: 'background-color',
      data: tokens.colors.colorsMap,
    }),
    generateClasses({
      separator: 'border',
      property: 'border-color',
      data: tokens.colors.colorsMap,
    }),
  ].join('\n');
}

function generateTypography() {
  return [
    generateClasses({ property: 'font-family', data: tokens.typography.typeface }),
    generateClasses({ property: 'font-weight', data: tokens.typography.weights }),
    generateClasses({ property: 'font-size', data: tokens.typography.fontSizes }),
    generateClasses({ property: 'letter-spacing', data: tokens.typography.letterSpacings }),
  ].join('\n');
}

function generateImports() {
  return Object.keys(tokens).reduce((scss, token) => `${scss}@import '${token}.scss';\n`, '');
}

function generateVariablesImport(output: string) {
  return `@import '../index.scss';\n${output}`;
}

function addVariablesImport([fileName, css]: string[]) {
  return [fileName, generateVariablesImport(css)];
}

export default [
  ['_colors', generateColorsFile()],
  ['_typography', generateTypography()],
  ['_radii', generateClasses({ property: 'border-radius', data: tokens.radii.values })],
  [
    '_shadows',
    generateClasses({
      property: 'box-shadow',
      data: Object.assign(
        {},
        tokens.shadows.outer,
        tokens.shadows.inner,
        tokens.shadows.innerN,
        tokens.shadows.border,
      ),
    }),
  ],
  ['_spacing', generateSpacing()],
  [
    '_transition',
    generateClasses({ property: 'transition-duration', data: tokens.transition.durations }),
  ],
  ['index', generateImports()],
].map(addVariablesImport);
