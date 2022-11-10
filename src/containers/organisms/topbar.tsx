import React from 'react';
import { Box } from '@andideve/design-system';
import clsx from 'clsx';

import { UI } from '@/config/constants';

export interface TopbarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Topbar({ children, className }: TopbarProps) {
  return (
    <Box
      height={UI.topbarHeight}
      borderColor="separator.default"
      className={clsx('topbar px-2 border-b', className)}
    >
      {children}
    </Box>
  );
}

export default Topbar;
