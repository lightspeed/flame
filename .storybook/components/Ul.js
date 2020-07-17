import React from 'react';

const Ul = ({ ...restProps }) => (
  <ul
    style={{
      listStyle: 'none',
      margin: '0',
      padding: '0',
    }}
    {...restProps}
  />
);

export { Ul };
