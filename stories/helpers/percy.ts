import { commonTheme } from '../../packages/flame-tokens/src/theme-ui/common';

const integerBreakpoints = commonTheme.breakpoints.map(v =>
  Number.parseInt(v.replace('px', ''), 10),
);

const percyBreakpoints = { percy: { widths: integerBreakpoints } };
const percySkip = { percy: { skip: true } };

export { percyBreakpoints, percySkip };
