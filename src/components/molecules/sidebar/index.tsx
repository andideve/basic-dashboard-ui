import React from 'react';
import { Box } from '@andideve/design-system';
import clsx from 'clsx';

import { UI } from '@/config/constants';

export * from './side-menu';
export * from './side-content';
export * from './side-edge';

export function Sidebar({
  children,
  className,
  style,
  collapse,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  collapse?: boolean;
}) {
  return (
    <Box
      as="aside"
      width={collapse ? UI.sidebarCollapseWidth : UI.sidebarWidth}
      borderColor="separator.default"
      backgroundColor="background.secondary"
      className={clsx('sidebar overflow-x-hidden flex flex-col border-r', className)}
      style={{ transition: `width ${UI.sidebarDuration}ms ease`, ...style }}
    >
      {children}
    </Box>
  );
}

export default Sidebar;
