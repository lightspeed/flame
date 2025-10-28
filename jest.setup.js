/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

afterEach(cleanup);

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
