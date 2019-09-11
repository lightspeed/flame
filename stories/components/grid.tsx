import styled from '@emotion/styled';
import { style } from 'styled-system';

const gridRows = style({
  prop: 'rows',
  cssProperty: 'gridTemplateRows',
  transformValue: rows => (typeof rows === 'number' ? `repeat(${rows}, auto)` : rows),
});

const gridCols = style({
  prop: 'cols',
  cssProperty: 'gridTemplateColumns',
  transformValue: cols => (typeof cols === 'number' ? `repeat(${cols}, auto)` : cols),
});

const gridGap = style({
  prop: 'gridGap',
  cssProperty: 'gridGap',
});

interface Props {
  rows?: string | string[] | number | number[];
  cols?: string | string[] | number | number[];
  gridGap?: string | string[] | number | number[];
}
const Grid = styled('div')<Props>`
  display: grid;
  ${gridRows};
  ${gridCols};
  ${gridGap}
`;

export { Grid };
