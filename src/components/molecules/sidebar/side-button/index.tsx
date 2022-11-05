import React from 'react';
import styled from '@emotion/styled';
import type { Theme } from '@andideve/design-system';
import clsx from 'clsx';

const Button = styled.button<{ theme?: Theme }>(({ theme: { colors } }) => ({
  '&:not([disabled]):hover': {
    backgroundColor: colors.background.elevated.secondary,
  },
}));

export function SideButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={clsx('inline-flex items-center justify-start h-8 py-1 px-2 rounded-md', className)}
      {...rest}
    >
      {children}
    </Button>
  );
}

SideButton.defaultProps = {
  type: 'button',
};

export default SideButton;
