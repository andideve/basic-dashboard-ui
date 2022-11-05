import React from 'react';
import { Typography } from '@andideve/design-system';
import clsx from 'clsx';

import { Menu } from '@/types/defaults';

export function MenuContent({
  className,
  icon: SVG,
  label,
}: { className?: string } & Pick<Menu, 'icon' | 'label'>) {
  return (
    <div className={clsx('flex items-center', className)}>
      <SVG className="min-w-[1rem] max-w-[1rem] h-4 mr-3" />
      <Typography as="span" title={label} size="sm" className="truncate">
        {label}
      </Typography>
    </div>
  );
}

export default MenuContent;
