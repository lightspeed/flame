import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import camelCase from 'lodash/camelCase';

// We load the icon-sprite through the raw-loader and through SVGInline for the story
// @ts-ignore
import IconSprite from '!raw-loader!../icon-sprite.svg'; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved

import { Icon } from '../index';
import { IconAdd } from '../Add';
import { IconArrowDown } from '../ArrowDown';
import { Box } from '../../Core';
import Readme from '../README.md';
import IconList from '../../../svg/Icon.list.json';
import '../../../svg/Icons/icon.scss';
import { Ul } from '../../../../../.storybook/components/Ul';

const stories = storiesOf('Components|Icon', module).addDecorator(withReadme(Readme));

const iconList: any = IconList;

type IconPresenterProps = { name?: string };
type IconPresenterState = { colors: any };
class IconPresenter extends React.PureComponent<IconPresenterProps, IconPresenterState> {
  constructor(props: IconPresenterProps) {
    super(props);

    this.state = {
      colors: null,
    };

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const element = event.target as HTMLLIElement;
    const colorClass = (element.attributes as any)['data-icon-iconname'].nodeValue.replace(
      '-',
      'Color',
    );

    this.setState({
      colors: {
        [colorClass]: 'danger',
      },
    });
  }

  handleOnMouseLeave() {
    this.setState({
      colors: null,
    });
  }

  render() {
    const { children } = this.props;
    const { name } = (children as any).props;
    const { colors } = this.state;

    return (
      <Box
        as="li"
        mb={2}
        px={4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {React.Children.map(children, child => {
            if (typeof child === 'string') return child;

            return React.cloneElement(child as any, { name, ...colors });
          })}
          <Box as="span" ml={2} fontSize="text-s">
            {name}
          </Box>
        </div>
        <div>
          <Ul className="cr-text-xs cr-gray-300" style={{ cursor: 'pointer', textAlign: 'right' }}>
            {(iconList[name as string] as any).map((iconName: string) => (
              <li
                key={iconName}
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseLeave}
                data-icon-iconname={`${iconName}`}
              >
                {iconName}
              </li>
            ))}
          </Ul>
        </div>
      </Box>
    );
  }
}

stories.add('Story', () => (
  <Ul className="list-50" style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(iconList).map(name => {
      const SingleIcon = () => (
        <IconPresenter>
          <Icon name={name} size="2rem" />
        </IconPresenter>
      );
      const camel = camelCase(name);
      const capitaled = camel[0].toUpperCase() + camel.slice(1);
      SingleIcon.displayName = capitaled;

      return <SingleIcon />;
    })}
  </Ul>
));

stories.add('Size', () => (
  <Ul>
    {['0.875rem', '1rem', '1.125rem', '1.5rem', '2.25rem', '4rem'].map(size => (
      <Box as="li" mb={2} key={size}>
        <Icon name="register" size={size} />
        <Box as="span" ml={2} style={{ fontSize: size }}>
          {size}
        </Box>
      </Box>
    ))}
  </Ul>
));

const whiteBackgroundIcons = {
  download: [
    {
      color: 'maple',
    },
    {
      baseColor: 'green-200',
      detailsColor: 'green-300',
    },
    {
      baseColor1: 'blue-200',
      detailsColor1: 'blue',
    },
    {
      baseColor1: 'dive',
      detailsColor1: 'gray-100',
    },
  ],
  blogs: [
    {
      color: 'maple',
      detailsColor: 'maple-100',
    },
    {
      baseColor: 'yellow-200',
      detailsColor: 'yellow-300',
    },
    {
      baseColor1: 'blue-200',
      baseColor2: 'blue-300',
      detailsColor2: 'dive',
    },
    {
      baseColor: 'blue-200',
      detailsColor1: 'blue-300',
      detailsColor2: 'blue-100',
    },
  ],

  customers: [
    {
      color: 'maple',
    },
    {
      baseColor1: 'green-200',
      baseColor2: 'green-300',
    },
    {
      baseColor1: 'blue-200',
      baseColor2: 'blue-300',
    },
  ],
  dashboard: [
    {
      baseColor: 'maple',
      detailsColor: 'maple-300',
    },
    {
      color: 'dive',
    },
    {
      baseColor: 'yellow-200',
      detailsColor1: 'yellow-300',
      detailsColor2: '#e69524',
    },
  ],
  'ecom-am': [
    {
      color: 'dive',
    },
    {
      baseColor: 'maple',
    },
  ],
};

const darkBackgroundIcons = {
  blogs: [
    {
      color: 'maple',
      detailsColor: 'maple-100',
    },
    {
      baseColor: 'yellow-200',
      detailsColor: 'yellow-300',
    },
    {
      baseColor1: 'blue-200',
      baseColor2: 'blue-300',
      detailsColor2: 'dive',
    },
    {
      baseColor: 'blue-200',
      detailsColor1: 'blue-300',
      detailsColor2: 'blue-100',
    },
  ],
  'lock-open': [
    {
      color: '#fff',
      detailsColor: 'dive-100',
    },
    {
      baseColor: 'green-200',
      detailsColor: 'green-300',
    },
    {
      baseColor: 'yellow-200',
      detailsColor: 'yellow-300',
    },
    {
      baseColor: '#e69524',
      detailsColor1: 'blue-300',
      detailsColor2: 'blue-100',
    },
    {
      baseColor1: 'blue-200',
      baseColor2: 'blue-300',
      detailsColor2: 'dive',
    },
  ],
  dashboard: [
    {
      baseColor1: 'green-200',
      detailsColor2: 'dive',
    },
    {
      baseColor: 'maple',
      detailsColor: 'maple-300',
    },
    {
      baseColor1: 'blue-200',
      detailsColor1: 'blue-300',
    },
    {
      color: '#fff',
      detailsColor2: 'dive',
    },
    {
      baseColor: 'yellow-200',
      detailsColor1: 'yellow-300',
      detailsColor2: '#e69524',
    },
  ],
  'ecom-eu': [
    {
      baseColor: 'blue',
      detailsColor: 'snow',
    },
    {
      baseColor: 'blue',
      detailsColor: 'green',
    },
  ],
};

stories.add('Colors', () => (
  <div>
    <Ul className="list-50" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(whiteBackgroundIcons).map(name =>
        (whiteBackgroundIcons as any)[name].map((colors: any) => (
          <li
            className="cr-mb-2 cr-ph-4"
            key={JSON.stringify(colors)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Icon name={name} {...colors} size="2rem" />
            <Ul className="cr-ml-2 cr-text-xs cr-gray-300" style={{ textAlign: 'right' }}>
              {Object.keys(colors).map(key => (
                <li className="cr-mr-2 cr-text-s" key={key}>{`${key}: ${colors[key]}`}</li>
              ))}
            </Ul>
          </li>
        )),
      )}
    </Ul>
    <div className="cr-pt-4 cr-pb-1" style={{ background: '#232a3b', color: '#fff' }}>
      <Ul className="list-50" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(darkBackgroundIcons).map(name =>
          (darkBackgroundIcons as any)[name].map((colors: any) => (
            <li
              className="cr-mb-2 cr-ph-4"
              key={JSON.stringify(colors)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Icon name={name} {...colors} size="2rem" />
              <Ul className="cr-ml-2 cr-text-xs cr-gray-100" style={{ textAlign: 'right' }}>
                {Object.keys(colors).map(key => (
                  <li className="cr-mr-2 cr-text-s" key={key}>{`${key}: ${colors[key]}`}</li>
                ))}
              </Ul>
            </li>
          )),
        )}
      </Ul>
    </div>
  </div>
));

stories.add(
  'Using Individual Icons',
  () => (
    <div className="icon-sprite-listing">
      <p className="cr-text cr-gray">
        In order to reduce bundle size, you may want to import each Icon individually. Doing so will
        enable proper treeshaking.
      </p>
      <div>
        <p>Each icons have the exact same api as the regular `Icon`, minus the name prop.</p>
        <div>
          <code>
            <div>import Add from &#39;@lightspeed/flame-icon/icons/Add&#39;;</div>
            <div>&lt;Add size=&#34;2rem&#34; /&gt;</div>
          </code>
          <div>
            <IconAdd size="2rem" />
          </div>
        </div>
        <div>
          <code>
            <div>import ArrowDown from &#39;@lightspeed/flame-icon/icons/ArrowDown&#39;;</div>
            <div>&lt;ArrowDown size=&#34;2rem&#34; color=&#34;blue&#34; /&gt;</div>
          </code>
          <div>
            <IconArrowDown size="2rem" color="blue" />
          </div>
        </div>
      </div>
    </div>
  ),
  { percy: { skip: true } },
);

stories.add('Sprite', () => (
  <div className="icon-sprite-listing">
    <p className="cr-text cr-gray">
      The svg icon sprite needs to be inlined (IE doesn&apos;t support external svg) in the page for
      the icon ID reference to be used
    </p>
    <p>
      Note: <code>icon-sprite.svg</code> is hidden in the page source.
    </p>

    <h3>Default</h3>
    {Object.keys(IconList).map(name => (
      <span style={{ padding: '0.75rem' }}>
        <svg
          className={`cr-icon cr-icon-${name}`}
          key={name}
          viewBox="0 0 16 16"
          width={16}
          height={16}
        >
          <use xlinkHref={`#cr-icon-${name}`} />
        </svg>
      </span>
    ))}

    <h3>Customized with CSS Variables</h3>
    <div className="icons-css-vars">
      {Object.keys(IconList).map(name => (
        <span style={{ padding: '0.75rem' }}>
          <svg
            className={`cr-icon cr-icon-${name}`}
            key={name}
            viewBox="0 0 16 16"
            width={16}
            height={16}
          >
            <use xlinkHref={`#cr-icon-${name}`} />
          </svg>
        </span>
      ))}
    </div>

    <div // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: IconSprite }}
    />
  </div>
));
