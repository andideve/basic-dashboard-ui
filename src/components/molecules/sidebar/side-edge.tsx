import React from 'react';
import styled from '@emotion/styled';
import { Box, Theme } from '@andideve/design-system';
import clsx from 'clsx';

import { UI } from '@/config/constants';

const Button = styled.button<{ theme?: Theme }>(({ theme: { colors } }) => ({
  '&:not([disabled]):hover': {
    backgroundColor: colors.background.elevated.secondary,
  },
}));
function EdgeButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={clsx(
        'overflow-x-hidden inline-flex items-center justify-start h-8 py-1 px-2 rounded-md',
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}
EdgeButton.defaultProps = {
  type: 'button',
};

interface SideEdgeFC<P = {}> extends React.FC<P> {
  Button: typeof EdgeButton;
}

export const SideEdge: SideEdgeFC<{
  placement: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className, placement }) => (
  <Box
    height={UI.topbarHeight}
    borderColor="separator.default"
    className={clsx(
      'sidebar__edge flex flex-col justify-center p-2',
      placement === 'top' ? 'border-b' : 'border-t',
      className,
    )}
  >
    {children}
  </Box>
);

SideEdge.Button = EdgeButton;

export default SideEdge;
