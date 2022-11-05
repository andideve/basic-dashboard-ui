import React from 'react';
import { Button, Typography } from '@andideve/design-system';

import Page from '../../page';
import Topbar from '@/containers/organisms/topbar';
import Logo from '@/components/atoms/icons/logo';
import { siteMetadata } from '../../../../_data/app';

export { Section } from '../../page';

export default function LoginPage({ children }: { children?: React.ReactNode }) {
  return (
    <Page>
      <Topbar className="sticky top-0 flex items-center justify-between z-[999]">
        <div className="px-2">
          <Logo className="w-6 h-6" />
        </div>
        <div className="flex items-center">
          <Typography as="span" size="sm" className="mr-4">
            New to {siteMetadata.title}?
          </Typography>
          <Button href="#" size="xs" variant="gray">
            Create an Account
          </Button>
        </div>
      </Topbar>
      <main>{children}</main>
    </Page>
  );
}
