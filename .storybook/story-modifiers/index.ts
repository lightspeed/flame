/* eslint-disable no-param-reassign */
/**
 * Various functions to mutate a story.
 * Use these to quickly and declaratively add
 * configurations to a story.
 */

import merge from 'lodash/merge';

export function disableChromaticSnapshots(story: any) {
  story = merge(story, {
    story: {
      parameters: {
        chromatic: {
          disable: true,
        },
      },
    },
  });
}

export function adjustChromaticSnapshotDiffThreshold(story: any, threshold: number) {
  story = merge(story, {
    story: {
      parameters: {
        chromatic: {
          diffThreshold: threshold,
        },
      },
    },
  });
}

export function disableDocsStory(story: any) {
  story = merge(story, {
    story: {
      parameters: {
        docs: {
          disable: true,
        },
      },
    },
  });
}
