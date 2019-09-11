import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import cn from 'classnames';

import { Popover, PopoverProps, PopoverPlacement } from './Popover';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Box } from '../Core';
import Readme from './README.md';
import styles from '../../../../stories/styles/stories.scss';
import typography from '../../../flame-tokens/partials/_typography.scss';
import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Popover', module).addDecorator(withReadme(Readme));

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
  <div
    className={cn(styles['example__block--dashed'], spacing['cr-pv-5'], {
      [styles['example__block--dashed-active']]: active,
    })}
    style={{ cursor: 'pointer' }}
    {...targetProps}
    {...targetEvents}
  >
    &#10010;
  </div>
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
        <div className={cn(spacing['cr-p-4'], typography['cr-text-s'])}>{content}</div>
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
        <div className={cn(spacing['cr-p-2'], typography['cr-text-s'])}>
          <Text>{content}</Text>
          <Button onClick={this.handleClose}>Close</Button>
        </div>
      </Popover>
    );
  }
}

stories.addWithPercyOptions('Story', { skip: true }, () => (
  <div>
    <h3>Story</h3>
    <h4>Themes</h4>
    <div>
      <div className={cn(styles.example, styles[`example--col`])}>
        <div className={styles.example__block}>
          <PopoverSimple content="Popover content, you can put anything in here." />
        </div>
        <div className={cn(styles.example__code, styles[`text-center`])}>Default</div>
      </div>
      <div className={cn(styles.example, styles[`example--col`])}>
        <div className={styles.example__block}>
          <PopoverSimple content="Popover content, you can put anything in here." light />
        </div>
        <div className={cn(styles.example__code, styles[`text-center`])}>Light</div>
      </div>
    </div>

    <h4>Options</h4>
    <div className={cn(styles.example, styles[`example--col`])}>
      <div className={styles.example__block}>
        <PopoverSimple content="Popover content, you can put anything in here." noArrow />
      </div>
      <div className={cn(styles.example__code, styles[`text-center`])}>No Arrow</div>
    </div>
    <div className={cn(styles.example, styles[`example--col`])}>
      <div className={styles.example__block}>
        <PopoverSimple
          content="Popover content, you can put anything in here."
          isFlipEnabled={false}
        />
      </div>
      <div className={cn(styles.example__code, styles[`text-center`])}>Flip disabled</div>
    </div>
    <div className={cn(styles.example, styles[`example--col`])}>
      <div className={styles.example__block}>
        <PopoverWithCloseButton content="Clicking outside will not close it" autoClose={false} />
      </div>
      <div className={cn(styles.example__code, styles[`text-center`])}>autoClose off</div>
    </div>
  </div>
));

stories.addWithPercyOptions('Placement', { skip: true }, () => (
  <div>
    <h3>Dark</h3>
    <div>
      {placements.map(placement => (
        <div key={placement} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <PopoverSimple content={placement} placement={placement} />
          </div>
          <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
        </div>
      ))}
    </div>
    <h3>Light</h3>
    <div>
      {placements.map(placement => (
        <div key={placement} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <PopoverSimple content={placement} placement={placement} light />
          </div>
          <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
        </div>
      ))}
    </div>
  </div>
));

stories.addWithPercyOptions('Events', { skip: true }, () => (
  <div>
    <h3>Events (see Action Logger)</h3>
    <div>
      <div className={cn(styles.example, styles[`example--col`])}>
        <div className={styles.example__block}>
          <PopoverWithCloseButton content="Click the button to close the popover:" light />
        </div>
        <div className={cn(styles.example__code, styles[`text-center`])}>
          State controlled from outside
        </div>
      </div>
    </div>
  </div>
));

stories.addWithPercyOptions('Overlaying Popover Test', { skip: true }, () => (
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
));

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
      <div className={cn(spacing['cr-p-4'], typography['cr-text-s'])}>
        Popover should not flicker (Re-render count: {state})
      </div>
    </Popover>
  );
};

stories.addWithPercyOptions('Stress test', { skip: true }, () => (
  <div>
    <h3>Re-rendering content within the popover (should count up)</h3>
    <div>
      <RerenderingPopover />
    </div>
  </div>
));

stories.add('Percy Placement', () => (
  <div style={{ height: '1000px' }}>
    <h3>Dark</h3>
    <div>
      {placements.map(placement => (
        <div key={placement} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <PopoverSimple isOpen content={placement} placement={placement} />
          </div>
          <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
        </div>
      ))}
    </div>
    <h3>Light</h3>
    <div>
      {placements.map(placement => (
        <div key={placement} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <PopoverSimple isOpen content={placement} placement={placement} light />
          </div>
          <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
        </div>
      ))}
    </div>
  </div>
));
