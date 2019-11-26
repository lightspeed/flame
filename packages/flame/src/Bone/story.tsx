import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Bone } from './Bone';
import { Text, Heading2 } from '../Text';

import Readme from './README.md';
import { Card, CardSection } from '../Card';
import { Divider } from '../Divider';

const stories = storiesOf('Components|Bone', module).addDecorator(withReadme(Readme));

stories.add('Styles', () => (
  <div>
    <div className="cr-p-3">
      <Heading2>Skeleton</Heading2>
      <Text color="gray-300">Bones</Text>
      <div style={{ display: 'inline-flex' }} className="cr-mt-4">
        <div className="cr-pr-4" style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="5rem" />
          </Text>
          <Text size="small" color="gray-300">
            Body Bone
          </Text>
        </div>
        <div className="cr-pr-4" style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="5rem" height="3rem" />
          </Text>
          <Text size="small" color="gray-300">
            H1 Bone
          </Text>
        </div>
        <div className="cr-pr-4" style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="5rem" height="1.125rem" />
          </Text>
          <Text size="small" color="gray-300">
            H3 Bone
          </Text>
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="0.75rem" />
          </Text>
          <Text size="small" color="gray-300">
            Body Freeform
          </Text>
        </div>
      </div>
    </div>
    <div className="cr-p-3">
      <Heading2>Skeleton</Heading2>
      <Text color="gray-300">Examples</Text>
      <div className="cr-mt-4">
        <Card>
          <CardSection noSpacing>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '50%' }}>
                <Bone />
              </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '50%' }}>
                <Bone />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '100%' }}>
                <Bone />
              </div>
              <div className="cr-p-3" style={{ width: '50%' }}>
                <Bone />
              </div>
            </div>
          </CardSection>
        </Card>
        <Text size="small" color="gray-300" className="cr-pt-2">
          Static Table Skeleton
        </Text>
      </div>
    </div>
  </div>
));

stories.add(
  'Types',
  () => (
    <div className="cr-p-3">
      <Heading2>Bone</Heading2>
      <Text color="gray-300">Types</Text>

      <div style={{ display: 'inline-flex' }} className="cr-mt-4">
        <div className="cr-pr-4" style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="5rem" height="1.125rem" />
          </Text>
          <Text size="small" color="gray-300">
            Default
          </Text>
        </div>
        <div className="cr-pr-4" style={{ alignSelf: 'flex-end' }}>
          <Text className="cr-pb-2">
            <Bone width="5rem" height="1.125rem" animated={false} />
          </Text>
          <Text size="small" color="gray-300">
            Not animated
          </Text>
        </div>
      </div>
    </div>
  ),
  { percy: { skip: true } },
);
