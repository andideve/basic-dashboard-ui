import React from 'react';
import { Typography } from '@andideve/design-system';
import clsx from 'clsx';

export function GroupCategory({ className, label }: { label: string; className?: string }) {
  return (
    <Typography
      as="span"
      title={label}
      size="xs"
      color="foreground.secondary"
      className={clsx('uppercase truncate block font-semibold', className)}
    >
      {label}
    </Typography>
  );
}

export default GroupCategory;
