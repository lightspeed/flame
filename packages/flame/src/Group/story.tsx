import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Group, GroupAddon } from './index';
import Readme from './README.md';
import { Input } from '../Input';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Badge, PillBadge } from '../Badge';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Group', module).addDecorator(withReadme(Readme));
const bottomSpace = spacing[`cr-mb-3`];
const descriptionClasses = 'cr-text-s cr-gray-300 cr-mb-1';

stories.add('Types', () => (
  <div>
    <div>
      <h3>Horizontal Group</h3>
      <div className={bottomSpace}>
        <Group>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <Group>
          <Input placeholder="Country" />
          <Input placeholder="State" />
          <Input placeholder="City" />
        </Group>
      </div>
      <div className={bottomSpace}>
        <Group>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <Group>
          <Badge type="success">Success</Badge>
          <Badge type="info">Info</Badge>
          <Badge type="danger">Danger</Badge>
          <Badge type="important">Important</Badge>
        </Group>
      </div>
    </div>
    <div>
      <h3>Vertical Group</h3>
      <div className={bottomSpace}>
        <Group type="vertical">
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </div>
    </div>
  </div>
));

stories.add('Spacing', () => (
  <div>
    <div>
      <h3>noSpacing Horizontal Group</h3>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Default <code>&lt;Group /&gt;</code>
        </div>
        <Group noSpacing>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          When <code>inputBlock</code> is set, the only the input stretches to its full parent width
        </div>
        <Group noSpacing inputBlock>
          <Button>-</Button>
          <Input defaultValue="0" />
          <Button>+</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Multiple inputs inside an <code>inputBlock</code> <code>&lt;Group /&gt;</code>
        </div>
        <Group noSpacing inputBlock>
          <Input placeholder="Country" />
          <Input placeholder="State" />
          <Input placeholder="City" />
        </Group>
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Default button <code>&lt;Group /&gt;</code>
        </div>
        <Group noSpacing>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Using <code>block</code> property scales to the parent width
        </div>
        <Group noSpacing block>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </Group>
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Creating <code>&lt;Group /&gt;</code> inside <code>&lt;Group /&gt;</code>
        </div>
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
      </div>
      <div className={bottomSpace}>
        <div className={descriptionClasses}>
          Text vertical aligns inside <code>&lt;Group /&gt;</code> components
        </div>
        <Group>
          <div>Some text beside a button</div>
          <Button>First Button</Button>
        </Group>
      </div>
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
));

stories.add('Addon', () => (
  <div>
    <div>
      <h3>Horizontal Group Addon</h3>
      <div className={bottomSpace}>
        <Group>
          <GroupAddon>
            <Icon name="customers" />
          </GroupAddon>
          <Input placeholder="Group addons" />
          <GroupAddon>
            / cm<sup>2</sup>
          </GroupAddon>
        </Group>
      </div>

      <div className={bottomSpace}>
        <Group noSpacing>
          <GroupAddon>$</GroupAddon>
          <Input placeholder="Group addons" />
          <GroupAddon>
            / cm<sup>2</sup>
          </GroupAddon>
        </Group>
      </div>

      <h4>Addon horizontal positioning</h4>
      <h5 className="cr-mb-1">align={'"left"'} (Default)</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="left" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">align={'"center"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="center" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">align={'"right"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="right" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input />
          </Group>
        </div>
      </div>

      <h4>Addon vertically positioning</h4>
      <h5 className="cr-mb-1">verticalAlign={'"top"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="top" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">verticalAlign={'"middle"'} (default)</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="middle" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">verticalAlign={'"bottom"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon verticalAlign="bottom" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            {/* TODO: make use of flame-textarea when it arrives */}
            <textarea rows={5} />
          </Group>
        </div>
      </div>

      <h4>Custom classes</h4>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon className="width-200px">Fixed width of 200px</GroupAddon>
            <Input placeholder="Group addons" />
          </Group>
        </div>
      </div>

      <div className={bottomSpace}>
        <Group noSpacing block>
          <GroupAddon className="width-200px overflow-hidden">
            <div className="ellipsis">Example using ellipsis thats very long</div>
          </GroupAddon>
          <Input placeholder="Group addons" />
        </Group>
      </div>

      <h4>Fixed width and {'align="center"'}</h4>
      <div className={bottomSpace}>
        <div>
          <Group noSpacing block>
            <GroupAddon align="center" className="width-200px">
              Fixed width of 200px
            </GroupAddon>
            <Input placeholder="Group addons" />
          </Group>
        </div>
      </div>
    </div>

    <div>
      <h3>Vertical Group Addon</h3>
      <p>
        Note when using the vertical group, you will probably need to pass{' '}
        {<code>align={'"center"'}</code>} yourself to make sure {"it's"} aligned correctly
      </p>
      <div className={bottomSpace}>
        <div className={bottomSpace}>
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
        </div>
      </div>

      <h4>Addon horizontal positioning</h4>
      <h5 className="cr-mb-1">align={'"left"'} (Default)</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="left">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">align={'"center"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="center">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">align={'"right"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon align="right">Fixed width of 200px</GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>

      <h4>Addon vertically positioning</h4>
      <h5 className="cr-mb-1">verticalAlign={'"top"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="top" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">verticalAlign={'"middle"'} (default)</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="middle" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>

      <h5 className="cr-mb-1">verticalAlign={'"bottom"'}</h5>
      <div className={bottomSpace}>
        <div>
          <Group type="vertical" noSpacing block>
            <Button>First Button</Button>
            <GroupAddon verticalAlign="bottom" className="height-100px">
              Fixed height of 100px
            </GroupAddon>
            <Button>Second Button</Button>
          </Group>
        </div>
      </div>
    </div>
  </div>
));
