import NextHead from 'next/head';
import React from 'react';

import { siteMetadata } from '../../../_data/app';

export default function Head() {
  return (
    <NextHead>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link
        rel="preload"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
        href="/fonts/Inter-Regular.woff"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/Inter-Regular.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
        href="/fonts/Inter-Bold.woff"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/Inter-Bold.woff2"
      />
    </NextHead>
  );
}
