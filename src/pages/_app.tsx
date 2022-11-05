import '@/styles/fonts.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Global } from '@emotion/react';
import { Provider, Theme } from '@andideve/design-system';

import globalStyles from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider themeConfig={{ colorMode: 'dark' }}>
      <Global styles={(theme) => globalStyles(theme as Theme)} />
      <Component {...pageProps} />
    </Provider>
  );
}
