import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '@andideve/design-system';

import Page from '../page';
import Topbar from '@/containers/organisms/topbar';
import Logo from '@/components/atoms/logo';
import { siteMetadata } from 'src/_data/app';

export { Section } from '../page';

export default function PageLogin({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Page>
      <Topbar className="sticky top-0 flex items-center justify-between z-[999]">
        <Link href="/" className="block px-2">
          <Logo className="w-6 h-6" />
        </Link>
        <div className="flex items-center">
          <Typography as="span" size="sm" className="mr-4">
            New to {siteMetadata.title}?
          </Typography>
          <Button href="#" size="xs" variant="gray">
            Create an Account
          </Button>
        </div>
      </Topbar>
      <main className={className}>{children}</main>
    </Page>
  );
}
