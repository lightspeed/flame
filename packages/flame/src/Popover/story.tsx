import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { css } from '@styled-system/css';

import { Popover, PopoverProps, PopoverPlacement } from './Popover';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Box } from '../Core';
import Readme from './README.md';

const stories = storiesOf('Components|Popover', module).addDecorator(withReadme(Readme));

const placements: PopoverPlacement[] = [
  'top-start',
  'top',
  'top-end',
  'left-start',
  'left',
  'left-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end',
];

const sharedTarget = ({ targetProps, targetEvents, active }: any = {}) => (
  <Box
    css={css({
      border: '2px dashed #e1e4e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.75rem 0',
      py: 5,
      color: '#ed5153',
      '::before': {
        borderRight: '2px dashed #ed5153',
        content: `""`,
        padding: '.75rem .375rem',
      },
      '::after': {
        borderLeft: '2px dashed #ed5153',
        content: `""`,
        padding: '.75rem .375rem',
      },
      ...(active
        ? {
            borderColor: '#ed5153',
          }
        : {}),
    })}
    style={{ cursor: 'pointer' }}
    {...targetProps}
    {...targetEvents}
  >
    &#10010;
  </Box>
);

const BoxColumn: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      display: 'inline-block',
      width: '192px',
      mr: 2,
      mb: 2,
      textAlign: 'center',
    })}
    {...restProps}
  />
);

const BoxExample: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      p: 2,
      borderTopLeftRadius: 'radius-1',
      borderTopRightRadius: 'radius-1',
      border: '1px solid #e1e4e5',
      backgroundColor: '#f3f3f3',
    })}
    {...restProps}
  />
);

const BoxCode: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      padding: '.75rem',
      borderBottomLeftRadius: '.1875rem',
      borderBottomRightRadius: '.1875rem',
      borderLeft: '1px solid #e1e4e5',
      borderRight: '1px solid #e1e4e5',
      borderBottom: '1px solid #e1e4e5',
      background: '#fff',
    })}
    {...restProps}
  />
);

type PopoverExamplesProp = Partial<PopoverProps> & { content?: string; isOpen?: boolean };

class PopoverSimple extends Component<PopoverExamplesProp, { isOpen?: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      isOpen: true,
    });
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { content, ...rest } = this.props;
    return (
      <Popover
        target={sharedTarget}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        {...rest}
        isOpen={isOpen}
      >
        <Text p={4} fontSize="text-s">
          {content}
        </Text>
      </Popover>
    );
  }
}

(PopoverSimple as any).defaultProps = {
  isOpen: false,
};

// eslint-disable-next-line react/no-multi-comp
class PopoverWithCloseButton extends Component<PopoverExamplesProp, { isOpen?: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };

    // @ts-ignore
    this.actionOnOpen = action('onOpen');
    // @ts-ignore
    this.actionOnClose = action('onClose');
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    // @ts-ignore
    this.actionOnOpen();

    this.setState({
      isOpen: true,
    });
  }

  handleClose() {
    // @ts-ignore
    this.actionOnClose();

    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { content, ...rest } = this.props;

    return (
      <Popover
        target={sharedTarget}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        isOpen={isOpen}
        {...rest}
      >
        <Box p={2} fontSize="text-s">
          <Text>{content}</Text>
          <Button onClick={this.handleClose}>Close</Button>
        </Box>
      </Popover>
    );
  }
}

stories.add(
  'Story',
  () => (
    <div>
      <h3>Story</h3>
      <h4>Themes</h4>
      <div>
        <BoxColumn>
          <BoxExample>
            <PopoverSimple content="Popover content, you can put anything in here." />
          </BoxExample>
          <BoxCode>Default</BoxCode>
        </BoxColumn>
        <BoxColumn>
          <BoxExample>
            <PopoverSimple content="Popover content, you can put anything in here." light />
          </BoxExample>
          <BoxCode>Light</BoxCode>
        </BoxColumn>
      </div>

      <h4>Options</h4>
      <BoxColumn>
        <BoxExample>
          <PopoverSimple content="Popover content, you can put anything in here." noArrow />
        </BoxExample>
        <BoxCode>No Arrow</BoxCode>
      </BoxColumn>
      <BoxColumn>
        <BoxExample>
          <PopoverSimple
            content="Popover content, you can put anything in here."
            isFlipEnabled={false}
          />
        </BoxExample>
        <BoxCode>Flip disabled</BoxCode>
      </BoxColumn>
      <BoxColumn>
        <BoxExample>
          <PopoverWithCloseButton content="Clicking outside will not close it" autoClose={false} />
        </BoxExample>
        <BoxCode>autoClose off</BoxCode>
      </BoxColumn>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Placement',
  () => (
    <div>
      <h3>Dark</h3>
      <div>
        {placements.map(placement => (
          <BoxColumn key={placement}>
            <BoxExample>
              <PopoverSimple content={placement} placement={placement} />
            </BoxExample>
            <BoxCode>{placement}</BoxCode>
          </BoxColumn>
        ))}
      </div>
      <h3>Light</h3>
      <div>
        {placements.map(placement => (
          <BoxColumn key={placement}>
            <BoxExample>
              <PopoverSimple content={placement} placement={placement} light />
            </BoxExample>
            <BoxCode>{placement}</BoxCode>
          </BoxColumn>
        ))}
      </div>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Events',
  () => (
    <div>
      <h3>Events (see Action Logger)</h3>
      <div>
        <BoxColumn>
          <BoxExample>
            <PopoverWithCloseButton content="Click the button to close the popover:" light />
          </BoxExample>
          <BoxCode>State controlled from outside</BoxCode>
        </BoxColumn>
      </div>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Overlaying Popover Test',
  () => (
    <div>
      <Popover
        target={({ targetProps, targetEvents }) => (
          <div {...targetProps} {...targetEvents}>
            <Button>Button with Popover attached</Button>
          </div>
        )}
        isOpen
        zIndex={2}
      >
        <Box p={2}>I should be above the input</Box>
      </Popover>
      <Input label="I should be behind the popover" />
    </div>
  ),
  { percy: { skip: true } },
);

const RerenderingPopover = () => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(n => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setState]);

  return (
    <Popover target={sharedTarget} isOpen>
      <Text p={4} fontSize="text-s">
        Popover should not flicker (Re-render count: {state})
      </Text>
    </Popover>
  );
};

stories.add(
  'Stress test',
  () => (
    <div>
      <h3>Re-rendering content within the popover (should count up)</h3>
      <div>
        <RerenderingPopover />
      </div>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add('Percy Placement', () => (
  <div style={{ height: '1000px' }}>
    <h3>Dark</h3>
    <div>
      {placements.map(placement => (
        <BoxColumn key={placement}>
          <BoxExample>
            <PopoverSimple isOpen content={placement} placement={placement} />
          </BoxExample>
          <BoxCode>{placement}</BoxCode>
        </BoxColumn>
      ))}
    </div>
    <h3>Light</h3>
    <div>
      {placements.map(placement => (
        <BoxColumn key={placement}>
          <BoxExample>
            <PopoverSimple isOpen content={placement} placement={placement} light />
          </BoxExample>
          <BoxCode>{placement}</BoxCode>
        </BoxColumn>
      ))}
    </div>
  </div>
));
