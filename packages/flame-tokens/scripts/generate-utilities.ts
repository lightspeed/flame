import { typography, spacing, colors, shadows, radii, transition } from '../src';
import { theme } from '../src/theme-ui/lightspeed';

const tokens = { typography, spacing, colors, shadows, radii, transition };
function prefixName(name: string, prefix = 'cr-') {
  return `${prefix}${name}`;
}

const boxShadows = Object.assign(
  {},
  tokens.shadows.outer,
  tokens.shadows.inner,
  tokens.shadows.innerN,
  tokens.shadows.border,
);

interface GenerateClasses {
  separator?: string;
  property: string;
  namespaces?: string[];
  data: any;
}
function generateClasses({
  separator = '',
  property,
  data,
  namespaces = ['cr-', 'fl-'],
}: GenerateClasses) {
  const selector = (name: string, namespace: string) =>
    separator ? `.${namespace}${separator}-${name}` : `.${prefixName(name, namespace)}`;

  return Object.keys(data).reduce((output, name) => {
    const nextRules = namespaces
      .map(n => {
        return `${selector(name, n)} { ${property}: $${prefixName(name, n)}; }`;
      })
      .join('\n');
    return `${output}\n${nextRules}`;
  }, '');
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

function generateColorsFile(themeColors: any) {
  return [
    generateClasses({ property: 'color', data: themeColors }),
    generateClasses({
      separator: 'bg',
      property: 'background-color',
      data: themeColors,
    }),
    generateClasses({
      separator: 'border',
      property: 'border-color',
      data: themeColors,
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

function generatePartials(path: string, colors: any) {
  return [
    [`${path}/_colors.scss`, generateColorsFile(colors)],
    [`${path}/_typography.scss`, generateTypography()],
    [
      `${path}/_radii.scss`,
      generateClasses({ property: 'border-radius', data: tokens.radii.values }),
    ],
    [
      `${path}/_shadows.scss`,
      generateClasses({
        property: 'box-shadow',
        data: boxShadows,
      }),
    ],
    [`${path}/_spacing.scss`, generateSpacing()],
    [
      `${path}/_transition.scss`,
      generateClasses({ property: 'transition-duration', data: tokens.transition.durations }),
    ],
    [`${path}/index.scss`, generateImports()],
  ];
}

export default [
  ...generatePartials('partials', tokens.colors.colorsMap),
  ...generatePartials('sass/oldskool/partials', tokens.colors.colorsMap),
  ...generatePartials('sass/flame/partials', theme.colors),
].map(addVariablesImport);
