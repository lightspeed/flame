import * as React from 'react';

import { Text, Heading1, Heading2, Heading3, Heading4, TextLink, TextContent } from './Text';

import { Divider } from '../Divider';
import { Box } from '../Core';

export default {
  title: 'Components/Text',
  component: Text,
  subcomponents: { Heading1, Heading2, Heading3, Heading4, TextLink, TextContent },
};

const textBodyStyles: ('small' | 'normal' | 'large' | 'xlarge')[] = [
  'small',
  'normal',
  'large',
  'xlarge',
];

const BodyContent = () => (
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore cum dignissimos eum
    fugiat est pariatur ullam. Asperiores placeat adipisci nam magnam, error perferendis dolor
    consectetur ipsa iure! Id consectetur, excepturi nisi hic dicta ducimus odit est tenetur
    perspiciatis facilis molestiae, ullam repudiandae tempore.
  </span>
);

export const body = () => (
  <div>
    {textBodyStyles.map(style => (
      <Box key={style} mb={3}>
        <Text size={style}>Text {style}</Text>
      </Box>
    ))}
    <Text lineHeight={8} fontSize="3rem">
      Custom line height & font size
    </Text>
    <Divider py={4}>Headings</Divider>
    <div>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
    </div>
    <Divider py={4}>Variants</Divider>
    <div>
      {textBodyStyles.map(style => (
        <Box key={`${style}`} mb={3}>
          <Text size={style} fontWeight="bold">
            Text {style} bold
          </Text>
          <Text size={style} color="gray-300">
            Text {style} dimmed
          </Text>
        </Box>
      ))}
    </div>
    <Divider py={4}>Link</Divider>

    <TextContent>
      <Text>
        <TextLink href="https://www.lightspeedhq.com">This is a link</TextLink> in a text block, by
        default it should not be bold.
      </Text>
      <Text>
        <TextLink href="https://www.lightspeedhq.com" fontWeight="bold">
          This is a link alone, it should be bold
        </TextLink>
      </Text>
    </TextContent>
    <Divider py={4}>Content</Divider>
    <div>
      <TextContent style={{ maxWidth: '45rem' }}>
        <Heading1>Heading 1</Heading1>
        <Text size="xlarge">
          <BodyContent />
        </Text>
        <Heading2>Heading 2</Heading2>
        <Text size="large">
          <BodyContent />
        </Text>
        <Heading3>Heading 3</Heading3>
        <Text>
          <BodyContent />
        </Text>
        <Heading4>Heading 4</Heading4>
        <Text size="small">
          <BodyContent />
        </Text>
        <Text>
          <TextLink href="https://www.lightspeedhq.com">This is a link</TextLink>
        </Text>
      </TextContent>
    </div>
    <Divider py={4}>Font Variants</Divider>
    <div>
      <Text>Regular old fonts</Text>
      <Text fontFamily="monospace">Monospaced fonts</Text>
    </div>
    <Divider py={4}>Color Variants</Divider>
    <table>
      <thead>
        <tr>
          <th>Flame color tokens</th>
          <th>Custom CSS colors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {['maple', 'green-300', 'orange-200'].map(color => (
              <Box key={`${color}`} mb={3}>
                <Text color={color}>Text {color}</Text>
              </Box>
            ))}
          </td>
          <td>
            {['#3c7797', 'pink', 'rgb(185, 52, 53)'].map(color => (
              <Box key={`${color}`} mb={3}>
                <Text color={color}>Text {color}</Text>
              </Box>
            ))}
            <Text style={{ color: 'blue' }}>Blue in style attribute</Text>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const bodyVariants = () => (
  <div>
    {textBodyStyles.map(style => (
      <div key={`${style}`} className="cr-mb-3">
        <Text size={style} fontWeight="bold" as="div">
          Text {style} bold
        </Text>
        <Text size={style} color="gray-300">
          Text {style} dimmed
        </Text>
      </div>
    ))}
  </div>
);

export const headings = () => (
  <div>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
  </div>
);

export const link = () => (
  <TextContent>
    <Text>
      <TextLink href="https://www.lightspeedhq.com">This is a link</TextLink> in a text block, by
      default it should not be bold.
    </Text>
    <Text>
      <TextLink href="https://www.lightspeedhq.com" fontWeight="bold">
        This is a link alone, it should be bold
      </TextLink>
      <TextLink href="https://www.lightspeedhq.com" color="red" fontWeight="bold">
        This is a link alone, it should be bold
      </TextLink>
    </Text>
  </TextContent>
);

export const content = () => (
  <div>
    <TextContent style={{ maxWidth: '45rem' }}>
      <Heading1>Heading 1</Heading1>
      <Text size="xlarge">
        <BodyContent />
      </Text>
      <Heading2>Heading 2</Heading2>
      <Text size="large">
        <BodyContent />
      </Text>
      <Heading3>Heading 3</Heading3>
      <Text>
        <BodyContent />
      </Text>
      <Heading4>Heading 4</Heading4>
      <Text size="small">
        <BodyContent />
      </Text>
      <Text>
        <TextLink href="https://www.lightspeedhq.com">This is a link</TextLink>
      </Text>
    </TextContent>
  </div>
);

export const fontFamilyVariants = () => (
  <div>
    <Text>Regular old fonts</Text>
    <Text fontFamily="monospace">Monospaced fonts</Text>
  </div>
);

export const colorVariants = () => (
  <table>
    <thead>
      <tr>
        <th>Flame color tokens</th>
        <th>Custom CSS colors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {['maple-300', 'green-300', 'orange-200'].map(color => (
            <Box key={`${color}`} mb={3}>
              <Text color={color}>Text {color}</Text>
            </Box>
          ))}
        </td>
        <td>
          {['#3c7797', 'pink', 'rgb(185, 52, 53)'].map(color => (
            <Box key={`${color}`} mb={3}>
              <Text color={color}>Text {color}</Text>
            </Box>
          ))}
          <Text style={{ color: 'blue' }}>Blue in style attribute</Text>
        </td>
      </tr>
    </tbody>
  </table>
);
