import React from 'react';

const Ul = (...restProps) => (
  <ul
    style={{
      listStyle: 'none',
      margin: 'none',
      padding: 'none',
    }}
    {...restProps}
  />
);

export { Ul };
