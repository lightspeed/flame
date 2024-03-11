import * as React from 'react';
import { transparentize } from 'polished';
import css from '@styled-system/css';

const CloseButton: React.FC<React.ComponentProps<'button'> & { chidlren: React.ReactNode }> = ({
  children,
  ...restProps
}) => (
  <button
    type="button"
    css={css(theme => ({
      fontSize: 'text',
      color: 'textHeading',
      backgroundColor: transparentize(0.9, theme.colors.textHeading),
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      width: '1em',
      height: '1em',
      padding: 0,
      position: 'relative',
      ' &:focus': {
        outline: 'none',
      },
    }))}
    {...restProps}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      css={{
        width: '0.5em',
        height: '0.5em',
        fill: 'black',
        position: 'absolute',
        top: '0.25em',
        left: '0.25em',
        right: '0',
        bottom: '0',
      }}
    >
      <g fillRule="evenodd" transform="translate(-4 -4)">
        <path
          fillOpacity=".5"
          d="M9.414 8l2.122-2.121a1 1 0 1 0-1.415-1.415L8 6.586 5.879 4.464A1 1 0 0 0 4.464 5.88L6.586 8l-2.122 2.121a1 1 0 0 0 1.415 1.415L8 9.414l2.121 2.122a1 1 0 0 0 1.415-1.415L9.414 8z"
        />
      </g>
    </svg>
    {children}
  </button>
);

export { CloseButton };
