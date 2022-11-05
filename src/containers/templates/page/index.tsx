import React from 'react';
import { Box, Typography } from '@andideve/design-system';

import Head from './head';
import { UI } from '@/config/constants';

export const Section: React.FC<{ children?: React.ReactNode; className?: string }> & {
  Head: React.FC<{ title: string }>;
} = ({ children, ...rest }) => (
  <Box as="section" px={UI.frameX} {...rest}>
    <div className="container mx-auto">{children}</div>
  </Box>
);

Section.Head = ({ title }) => (
  <header className="mb-6">
    <Typography as="h2" size="xl" className="font-bold">
      {title}
    </Typography>
  </header>
);

export default function Page({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}
