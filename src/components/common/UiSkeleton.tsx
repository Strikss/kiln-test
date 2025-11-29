import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import React from 'react';

type UiSkeletonProps = HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'li';
};

export function UiSkeleton({ className, as = 'div', ...props }: UiSkeletonProps) {
  return React.createElement(as, {
    className: clsx('animate-pulse bg-gray-300', className),
    ...props,
  });
}
