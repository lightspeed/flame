/* eslint-disable import/no-extraneous-dependencies */
import 'jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import * as emotion from 'emotion';
import { createSerializer, matchers as emotionMatchers } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(emotionMatchers);

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
