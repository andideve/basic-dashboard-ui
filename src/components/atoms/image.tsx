import React from 'react';
import clsx from 'clsx';

export default function Image({ className, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className={clsx('overflow-hidden', className)}>
      <img className="object-cover w-full h-full" {...rest} />
    </div>
  );
}
