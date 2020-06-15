/** @jsx jsx */
import { jsx } from '@emotion/core';
import { css } from '@styled-system/css';

const BoxColumn = ({ ...restProps }) => (
  <div
    css={css({
      display: 'inline-block',
      width: '192px',
      mr: 2,
      mb: 2,
      textAlign: 'center',
    })}
    {...restProps}
  />
);

const BoxExample = ({ ...restProps }) => (
  <div
    css={css({
      p: 2,
      borderTopLeftRadius: 'radius-1',
      borderTopRightRadius: 'radius-1',
      border: '1px solid #e1e4e5',
      backgroundColor: '#f3f3f3',
    })}
    {...restProps}
  />
);

const BoxCode = ({ ...restProps }) => (
  <div
    css={css({
      padding: '.75rem',
      borderBottomLeftRadius: '.1875rem',
      borderBottomRightRadius: '.1875rem',
      borderLeft: '1px solid #e1e4e5',
      borderRight: '1px solid #e1e4e5',
      borderBottom: '1px solid #e1e4e5',
      background: '#fff',
    })}
    {...restProps}
  />
);

const ExampleBox = ({ example, content }) => (
  <BoxColumn>
    <BoxExample>{example}</BoxExample>
    <BoxCode>{content}</BoxCode>
  </BoxColumn>
);

export { ExampleBox };
