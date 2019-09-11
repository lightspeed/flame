import { css } from '@emotion/core';
import { themeGet } from '@styled-system/theme-get';

export type FlagStyleProps = {
  /** Width of Flag. Height set automatically. */
  size?: string;
  /** Height of Flag. Width set automatically. */
  height?: string;
  /** CSS unit for size prop */
  unit?: string;
};

const cssUnitFromSize = (size: string) => size.replace(/.+?([^\d]+$)/, '$1');
const setFlagStyle = (props: FlagStyleProps) => {
  const size = themeGet(`fontSizes.${props.size}`, props.size)(props);
  const height = parseFloat(size) * 0.75;
  const unit = cssUnitFromSize(size);
  const nextHeight = `${height}${unit}`;
  return css`
    width: ${size} !important;
    height: ${nextHeight} !important;
    vertical-align: text-bottom;
  `;
};

export default setFlagStyle;
