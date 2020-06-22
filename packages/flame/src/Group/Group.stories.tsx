import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Group, GroupAddon, GroupItem } from './index';
import { Input } from '../Input';
import { Box } from '../Core';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Badge, PillBadge } from '../Badge';

const Description: React.FC = ({ children }) => (
  <Text fontSize="text-s" mb={1}>
    {children}
  </Text>
);

const DeprecationWarning: React.FC = () => (
  <div className="hide-in-percy">
    <Alert
      type="warning"
      icon={<Icon name="warning" color="orange" />}
      title="Deprecation notice"
      mb={2}
    >
      Group will be deprecated in the next major version of Flame, see README on how to replace each
      of its component.
    </Alert>
  </div>
);

export default {
  title: 'Components|Group',
  component: Group,
  subcomponents: {
    GroupAddon,
    GroupItem,
  },
};

export const types = () => (
  <div>
    <DeprecationWarning />
    <div>
      <h3>Horizontal Group</h3>
      <Box mb={3}>
        <Group>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Group>
          <Input placeholder="Country" />
          <Input placeholder="State" />
          <Input placeholder="City" />
        </Group>
      </Box>
      <Box mb={3}>
        <Group>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Group>
          <Badge type="success">Success</Badge>
          <Badge type="info">Info</Badge>
          <Badge type="danger">Danger</Badge>
          <Badge type="important">Important</Badge>
        </Group>
      </Box>
    </div>
    <div>
      <h3>Vertical Group</h3>
      <Box mb={3}>
        <Group type="vertical">
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </Box>
    </div>
  </div>
);

export const spacing = () => (
  <div>
    <DeprecationWarning />
    <div>
      <h3>noSpacing Horizontal Group</h3>
      <Box mb={3}>
        <Description>
          Default <code>&lt;Group /&gt;</code>
        </Description>
        <Group noSpacing>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          When <code>inputBlock</code> is set, the only the input stretches to its full parent width
        </Description>
        <Group noSpacing inputBlock>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          Multiple inputs inside an <code>inputBlock</code> <code>&lt;Group /&gt;</code>
        </Description>
        <Group noSpacing inputBlock>
          <Input placeholder="Country" />
          <Input placeholder="State" />
          <Input placeholder="City" />
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          Default button <code>&lt;Group /&gt;</code>
        </Description>
        <Group noSpacing>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          Using <code>block</code> property scales to the parent width
        </Description>
        <Group noSpacing block>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          Creating <code>&lt;Group /&gt;</code> inside <code>&lt;Group /&gt;</code>
        </Description>
        <Group>
          <Group noSpacing>
            <Button>Button</Button>
            <Button>Button</Button>
          </Group>
          <Group noSpacing inputBlock>
            <Button>Button</Button>
            <GroupAddon>
              <Icon name="ecom-am" baseColor="blue" detailsColor="green" />
            </GroupAddon>
            <Input placeholder="Country" />
            <Button>Button</Button>
          </Group>
        </Group>
      </Box>
      <Box mb={3}>
        <Description>
          Text vertical aligns inside <code>&lt;Group /&gt;</code> components
        </Description>
        <Group>
          <div>Some text beside a button</div>
          <Button>First Button</Button>
        </Group>
      </Box>
    </div>
    <div>
      <h3>noSpacing Vertical Group</h3>
      <p>
        Note when using the vertical group, you will probably need to pass{' '}
        {<code>align={'"center"'}</code>} yourself to make sure {"it's"} aligned correctly
      </p>
      <Group type="vertical" noSpacing>
        <GroupAddon align="center">Header Addon</GroupAddon>
        <Button>First Button</Button>
        <Button>Second Button</Button>
        <Button>Third Button</Button>
        <GroupAddon align="center">Footer Addon</GroupAddon>
      </Group>
    </div>
  </div>
);

export const addon = () => (
  <div>
    <DeprecationWarning />
    <div>
      <h3>Horizontal Group Addon</h3>
      <Box mb={3}>
        <Group>
          <GroupAddon>
            <Icon name="customers" />
          </GroupAddon>
          <Input placeholder="Group addons" />
          <GroupAddon>
            / cm<sup>2</sup>
          </GroupAddon>
        </Group>
      </Box>

      <Box mb={3}>
        <Group noSpacing>
          <GroupAddon>$</GroupAddon>
          <Input placeholder="Group addons" />
          <GroupAddon>
            / cm<sup>2</sup>
          </GroupAddon>
        </Group>
      </Box>

      <h4>Addon horizontal positioning</h4>
      <Text as="h5" mb={1}>
        align={'"left"'}
        (Default)
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="left" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        align={'"center"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="center" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        align={'"right"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="right" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </Box>

      <h4>Addon vertically positioning</h4>
      <Text as="h5" mb={1}>
        verticalAlign={'"top"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="top" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        verticalAlign={'"middle"'} (default)
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="middle" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        verticalAlign={'"bottom"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="bottom" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </Box>

      <h4>Custom classes</h4>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon className="width-200px">Fixed width of 200px</GroupAddon>
            <Input placeholder="Group addons" />
          </Group>
        </div>
      </Box>

      <Box mb={3}>
        <Group noSpacing block>
          <GroupAddon className="width-200px overflow-hidden">
            <div className="ellipsis">Example using ellipsis thats very long</div>
          </GroupAddon>
          <Input placeholder="Group addons" />
        </Group>
      </Box>

      <h4>Fixed width and {'align="center"'}</h4>
      <Box mb={3}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="center" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input placeholder="Group addons" />
          </Group>
        </div>
      </Box>
    </div>

    <div>
      <h3>Vertical Group Addon</h3>
      <p>
        Note when using the vertical group, you will probably need to pass{' '}
        {<code>align={'"center"'}</code>} yourself to make sure {"it's"} aligned correctly
      </p>
      <Box mb={3}>
        <Box mb={3}>
          <Group type="vertical" noSpacing>
            <Button>First Button</Button>
            <GroupAddon align="center">
              <Icon name="dashboard" />
            </GroupAddon>
            <Input placeholder="State" />
            <GroupAddon align="center">
              <PillBadge type="important" size="small">
                Important
              </PillBadge>
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </Box>
      </Box>

      <h4>Addon horizontal positioning</h4>
      <Text as="h5" mb={1}>
        align={'"left"'} (Default)
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="left">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        align={'"center"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="center">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        align={'"right"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="right">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>

      <h4>Addon vertically positioning</h4>
      <Text as="h5" mb={1}>
        verticalAlign={'"top"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="top" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        verticalAlign={'"middle"'} (default)
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="middle" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>

      <Text as="h5" mb={1}>
        verticalAlign={'"bottom"'}
      </Text>
      <Box mb={3}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="bottom" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </Box>
    </div>
  </div>
);
