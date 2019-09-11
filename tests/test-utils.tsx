import * as React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../packages/flame/src/Core/themes/oldskool';

const customRender = (node: React.ReactNode, ...options: any) =>
  render(<ThemeProvider theme={theme}>{node}</ThemeProvider>, ...options);

const createComponent = (node: React.ReactNode) =>
  renderer.create(<ThemeProvider theme={theme}>{node}</ThemeProvider>);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender, createComponent };
