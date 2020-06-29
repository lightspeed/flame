import React from 'react';

const BoxColumn = ({ ...restProps }) => (
  <div
    style={{
      display: 'inline-block',
      width: '192px',
      textAlign: 'center',
    }}
    className="fl-mb-2 fl-mr-2"
    {...restProps}
  />
);

const BoxExample = ({ ...restProps }) => (
  <div
    style={{
      border: '1px solid #e1e4e5',
      backgroundColor: '#f3f3f3',
      borderTopLeftRadius: '.1875rem',
      borderTopRightRadius: '.1875rem',
    }}
    className="fl-p-2"
    {...restProps}
  />
);

const BoxCode = ({ ...restProps }) => (
  <div
    style={{
      padding: '.75rem',
      borderBottomLeftRadius: '.1875rem',
      borderBottomRightRadius: '.1875rem',
      borderLeft: '1px solid #e1e4e5',
      borderRight: '1px solid #e1e4e5',
      borderBottom: '1px solid #e1e4e5',
      background: '#fff',
    }}
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
