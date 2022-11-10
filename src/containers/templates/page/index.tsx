import Link from 'next/link';
import React from 'react';
import { Box, BoxProps, Typography } from '@andideve/design-system';

import Head from './head';
import { UI } from '@/config/constants';

interface SectionFC<P = {}> extends React.FC<P> {
  Head: React.FC<{ title: string; href?: string }>;
}

export const Section: SectionFC<BoxProps> = ({ children, ...rest }) => (
  <Box as="section" py={UI.sectionFrameY} px={UI.frameX} {...rest}>
    <div className="container mx-auto">{children}</div>
  </Box>
);

Section.Head = ({ title, href }) => {
  const typography = (
    <Typography as="h2" size="xl" className="font-bold">
      {title}
    </Typography>
  );
  return (
    <header className="mb-6">
      {href ? (
        <Link href={href} className="inline-block">
          {typography}
        </Link>
      ) : (
        typography
      )}
    </header>
  );
};

export default function Page({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}
