import * as React from 'react';
import styled from '@emotion/styled';
import { layout, LayoutProps, compose } from 'styled-system';
import { border, BorderProps, css } from '../Core';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

interface BaseSelectProps extends Omit<LayoutProps, 'size'>, BorderProps {}
const BaseSelect = styled('select')<BaseSelectProps>`
  width: 100%;

  ${compose(
    layout,
    border,
  )}
`;

const generateDataImage = (size: number) => {
  return `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='${size}' height='${size}' fill='%23494c4c'%3E%3Cg id='chevron-up-down'%3E%3Cpath id='base-1' d='M8 12l2-2 1 1-3 3-3-3 1-1 2 2zm0-8L6 6 5 5l3-3 3 3-1 1-2-2z'/%3E%3C/g%3E%3C/svg%3E"`;
};

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>, BaseSelectProps {}
export const Select: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <BaseSelect
      css={css(get => ({
        color: get('selectStyles.color'),
        fontSize: ['text-l', 'text-s'],
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        height: [get('space.8'), get('space.6')],
        backgroundColor: get('selectStyles.backgroundColor'),
        border: `1px solid ${get('selectStyles.border')}`,
        borderRadius: 'radius-1',
        lineHeight: get('space.3'),
        backgroundImage: [
          `url(${generateDataImage(24)}), ${get('selectStyles.background')}`,
          `url(${generateDataImage(16)}), ${get('selectStyles.background')}`,
        ],
        appearance: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `right ${get('space.1')} center, center`,
        zIndex: 2,
        pt: 0,
        pr: 4,
        pb: 0,
        pl: 2,
        '&:focus': {
          outline: 'none',
          borderColor: get('selectStyles.focusBorder'),
        },
        '&:disabled': {
          color: get('selectStyles.disabledColor'),
          backgroundColor: get('selectStyles.disabledBackground'),
          boxShadow: 'none',
          opacity: 0.5,
        },
        /* IE 11 fix to remove default dropdown arrow */
        '&::-ms-expand': {
          display: 'none',
        },
        /* Firefox fix to remove inner outline on focus
        // https://twitter.com/sarasoueidan/status/720890849748480002 */
        '&:-moz-focusring': {
          color: 'transparent',
          textShadow: ` 0 0 0 ${get('selectStyles.color')}`,
        },
      }))}
      {...restProps}
    >
      {children}
    </BaseSelect>
  );
};
