import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('', {
  variants: {
    variant: {
      title: 'font-semibold text-2xl',
      body: 'text-base',
      'body-bold': 'font-semibold text-base',
      callout: 'text-sm',
      caption: 'text-xs',
    },
    color: {
      black: 'text-black-main',
      gray: 'text-gray-2',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type UiTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & VariantProps<typeof variants>;
export function UiText({ children, className, as = 'p', variant, color }: UiTextProps) {
  const computedClassName = variants({ variant, color, className });
  return React.createElement(as, { className: computedClassName, children });
}
