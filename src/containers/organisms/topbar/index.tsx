import React from 'react';
import { Box } from '@andideve/design-system';
import clsx from 'clsx';

import { UI } from '@/config/constants';

export default function Topbar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Box
      height={UI.topbarHeight}
      borderColor="separator.default"
      backgroundColor="background.primary"
      className={clsx('px-2 border-b', className)}
    >
      {children}
    </Box>
  );
}
