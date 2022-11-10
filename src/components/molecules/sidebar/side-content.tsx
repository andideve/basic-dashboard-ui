import React from 'react';
import clsx from 'clsx';

export function SideContent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('sidebar__content grow overflow-y-auto py-4 px-2', className)}>
      {children}
    </div>
  );
}

export default SideContent;
