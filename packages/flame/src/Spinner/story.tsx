import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Spinner } from './Spinner';
import Readme from './README.md';
import { SpacedGroup } from '../Group';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Spinner', module).addDecorator(withReadme(Readme));
const bottomSpace = spacing[`cr-mb-3`];
const descriptionClasses = 'cr-text-s cr-gray-300 cr-mb-1';

stories.add('Story', () => (
  <div>
    <div className={bottomSpace}>
      <div className={descriptionClasses}>Default</div>
      <Spinner />
    </div>
    <div className={bottomSpace}>
      <div className={descriptionClasses}>Resized</div>
      <SpacedGroup>
        <Spinner size="small" />
        <Spinner size="large" />
        <Spinner size="xlarge" />
        <Spinner size="xxlarge" />
        <Spinner size="4rem" />
      </SpacedGroup>
    </div>
    <div className={bottomSpace}>
      <div className={descriptionClasses}>Colored</div>
      <SpacedGroup>
        <Spinner size="xxlarge" color="blue" />
        <Spinner size="xxlarge" color="blue" baseColor2="night-100" />
        <Spinner size="xxlarge" color="green-200" />
        <Spinner size="xxlarge" color="maple-200" />
        <Spinner size="xxlarge" color="yellow-200" baseColor2="night-100" />
        <div className="cr-p-2" style={{ backgroundColor: '#212424', display: 'inline-flex' }}>
          <Spinner size="xxlarge" color="snow" />
        </div>
      </SpacedGroup>
    </div>
  </div>
));
