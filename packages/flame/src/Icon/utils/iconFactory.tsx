import * as React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';
import { layout, LayoutProps } from 'styled-system';

export type IconProps = {
  /** Name of requested Icon */
  name?: string;
  /** Size of Icon (px, rem, em, %, etc...) */
  size?: string;
  /** CSS class name */
  className?: string;
  /** Sets color for all (up to 4) zones */
  color?: string;
  /** Sets color for Base1 and Base2 zones */
  baseColor?: string;
  /** Sets color for Base1 only */
  baseColor1?: string;
  /** Sets color for Base2 only */
  baseColor2?: string;
  /** Sets color for Details1 and Details2 zones */
  detailsColor?: string;
  /** Sets color for Details1 only */
  detailsColor1?: string;
  /** Sets color for Details2 only */
  detailsColor2?: string;
  theme?: any;
};

export default function iconFactory(BaseIconComponent: React.FC, displayName = 'FlameIcon') {
  const EnhancedIcon: React.FC<IconProps> = ({
    size,
    className,
    color,
    baseColor,
    baseColor1,
    baseColor2,
    detailsColor,
    detailsColor1,
    detailsColor2,
    theme,
    ...restProps
  }) => {
    const themeProp = theme ? { theme } : {};
    const iconSize = themeGet(`fontSizes.${size}`, size)(themeProp) || undefined;

    const stylingProps = {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      color: themeGet(`colors.${color}`, color)(themeProp) || undefined,
      baseColor: themeGet(`colors.${baseColor}`, baseColor)(themeProp) || undefined,
      baseColor1: themeGet(`colors.${baseColor1}`, baseColor1)(themeProp) || undefined,
      baseColor2: themeGet(`colors.${baseColor2}`, baseColor2)(themeProp) || undefined,
      detailsColor: themeGet(`colors.${detailsColor}`, detailsColor)(themeProp) || undefined,
      detailsColor1: themeGet(`colors.${detailsColor1}`, detailsColor1)(themeProp) || undefined,
      detailsColor2: themeGet(`colors.${detailsColor2}`, detailsColor2)(themeProp) || undefined,
      /*
        Keep the cr-icon classname, in case consumers were using it as way
        to set an icons color or fill property.
      */
      className: [className, 'cr-icon'].join(' '),
    };

    const StyledIcon = styled(BaseIconComponent)<LayoutProps>`
      vertical-align: text-bottom;
      ${layout};
    `;

    StyledIcon.defaultProps = {
      width: iconSize || ['18px', '1rem'],
      height: iconSize || ['18px', '1rem'],
    };

    return <StyledIcon {...stylingProps} {...restProps} />;
  };

  const Enhanced = withTheme(EnhancedIcon);
  Enhanced.displayName = displayName;
  // Temporarely keep this, until we get batch 3 merged in,
  // button still relies on flameName for styling...
  // @ts-ignore
  Enhanced.flameName = 'Icon';

  return Enhanced;
}
