import * as React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { theme } from '../packages/flame/src/Core/themes/oldskool';

// Create a fresh deterministic cache for each render to ensure consistent snapshots
const createEmotionCache = () => createCache({ key: 'css' });

const customRender = (node: React.ReactNode, ...options: any) =>
  render(
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider theme={theme}>{node}</ThemeProvider>
    </CacheProvider>,
    ...options,
  );

const createComponent = (node: React.ReactNode) =>
  renderer.create(
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider theme={theme}>{node}</ThemeProvider>
    </CacheProvider>,
  );

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender, createComponent };
