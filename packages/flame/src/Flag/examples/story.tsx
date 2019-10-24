import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// We load the flag-sprite through the raw-loader and through SVGInline for the story
// @ts-ignore
import flagSprite from '!raw-loader!../../../svg/flag-sprite.svg'; // eslint-disable-line

import '../../../svg/Flags/flag.scss';
import { Flag } from '../index';
import { FlagCA } from '../CA';
import { FlagNL } from '../NL';

import flagList from '../../../svg/flag.list.json';
import Readme from '../README.md';

import { Box, Flex } from '../../Core';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Text } from '../../Text';
import { Ul } from '../../../../../stories/components/Ul';
import { SpacedGroup } from '../../../../../stories/components/SpacedGroup';

const stories = storiesOf('Flag', module).addDecorator(withReadme(Readme));

const Description: React.FC = ({ children }) => (
  <Text fontSize="text-s" mb={1}>
    {children}
  </Text>
);

type FlagPresenterProps = {};
type FlagPresenterState = {
  selectedName: string;
};

class FlagPresenter extends React.Component<FlagPresenterProps, FlagPresenterState> {
  constructor(props: FlagPresenterProps) {
    super(props);

    this.state = {
      selectedName: 'Select a flag',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name: string) {
    this.setState({
      selectedName: name,
    });
  }

  render() {
    const { selectedName } = this.state;

    return (
      <div>
        <Box mb={1}>
          <Input readOnly size="small" value={selectedName} onFocus={e => e.target.select()} />
        </Box>

        {flagList.map((flag: { code: string; name: string }) => (
          <span
            key={flag.code}
            onClick={() => {
              this.handleClick(
                `<svg class="cr-flag cr-flag-${flag.code}" viewBox="0 0 16 16"><use xlink:href="#cr-flag-${flag.code}"></use></svg>`,
              );
            }}
            style={{ padding: '0.75rem' }}
            onKeyDown={() => {}}
            role="presentation"
          >
            <svg
              className={`cr-flag cr-flag-${flag.code}`}
              viewBox="0 0 16 16"
              style={{ width: '2rem', height: '2rem' }}
            >
              <use xlinkHref={`#cr-flag-${flag.code}`} />
            </svg>
          </span>
        ))}
      </div>
    );
  }
}

stories.add('Story', () => (
  <div>
    <table className="table-bordered" style={{ tableLayout: 'fixed', textAlign: 'left' }}>
      <thead>
        <tr>
          <th style={{ width: '50px' }} />
          <th style={{ width: '80px' }}>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {flagList.map((flag: { code: string; name: string }) => (
          <tr key={flag.code}>
            <td style={{ textAlign: 'center' }}>
              <Flag code={flag.code} size="2rem" />
            </td>
            <td>{flag.code}</td>
            <td>{flag.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

stories.add('Size', () => (
  <Ul>
    {['0.875rem', '1rem', '1.125rem', '1.5rem', '2.25rem', '4rem'].map(size => (
      <Box as="li" mb={2} key={size}>
        <Flag code="ca" size={size} />
        <Box as="span" ml={2} style={{ fontSize: size }}>
          {size}
        </Box>
      </Box>
    ))}
  </Ul>
));

stories.add('Integration', () => (
  <div>
    <h3>Using the Icon component</h3>
    <Description>
      Flag inside a <code>Flex/Box</code> component
    </Description>
    <Box mb={3}>
      <SpacedGroup>
        <Flex>
          <Flag code="ca" />
        </Flex>
        <span>Flag of Canada</span>
      </SpacedGroup>
    </Box>
    <Description>
      Flag inside a <code>Button</code> component
    </Description>
    <Box mb={3}>
      <Button>
        <Flag code="nl" />
        <span>Flag of the Netherlands</span>
      </Button>
    </Box>
    <h3>Using single component imports</h3>
    <Description>
      Flag inside a <code>Flex/Box</code> component
    </Description>
    <Box mb={3}>
      <SpacedGroup>
        <Flex>
          <FlagCA />
        </Flex>
        <span>Flag of Canada</span>
      </SpacedGroup>
    </Box>
    <Description>
      Flag inside a <code>Button</code> component
    </Description>
    <Box mb={3}>
      <Button>
        <FlagNL />
        <span>Flag of the Netherlands</span>
      </Button>
    </Box>
  </div>
));

stories.add('Sprite', () => (
  <div>
    <div>
      <p className="cr-text cr-gray">
        The svg flag sprite needs to be inlined (IE doesn&apos;t support external svg) in the page
        for the flag ID reference to be used
      </p>
      <p>
        Note: <code>flag-sprite.svg</code> is hidden in the page source.
      </p>

      <FlagPresenter />

      <div // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: flagSprite }}
        id="wewe"
      />
    </div>
  </div>
));
