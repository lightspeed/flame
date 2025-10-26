import * as React from 'react';

// We load the flag-sprite through the raw-loader and through SVGInline for the story
// @ts-ignore
import flagSprite from '!raw-loader!../../../svg/flag-sprite.svg'; // eslint-disable-line
import '../../../svg/Flags/flag.scss';

import { Flag } from '../index';
import { FlagCA } from '../CA';
import { FlagNL } from '../NL';

import { Box, Flex } from '../../Core';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Text } from '../../Text';
import flagList from '../../../svg/flag.list.json';
import { Ul } from '../../../../../.storybook/components/Ul';
import { SpacedGroup } from '../../../../../.storybook/components/SpacedGroup';

export default {
  title: 'Components/Flag',
};

const Description: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Text fontSize="text-s" mb={1}>
    {children}
  </Text>
);

const FlagPresenter = () => {
  const [state, setState] = React.useState({
    selectedName: 'Select a flag',
  });
  const handleClick = (name: string) => {
    setState({
      selectedName: name,
    });
  };

  return (
    <div>
      <Box mb={1}>
        <Input readOnly size="small" value={state.selectedName} onFocus={e => e.target.select()} />
      </Box>

      {flagList.map((flag: { code: string; name: string }) => (
        <span
          key={flag.code}
          onClick={() => {
            handleClick(
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
};

export const story = () => (
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
);

export const size = () => (
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
);

export const integration = () => (
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
);

export const sprite = () => (
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
);
