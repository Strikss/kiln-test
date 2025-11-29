import { cva, type VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const buttonVariants = cva('shadow-sm', {
  variants: {
    variant: {
      primary: 'bg-black-1 text-gray-1',
      secondary: 'text-black-main border border-border-main',
    },
    size: {
      md: 'text-sm py-2 px-4 font-medium',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonAsButton = VariantProps<typeof buttonVariants> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = VariantProps<typeof buttonVariants> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type UiButtonProps = ButtonAsButton | ButtonAsLink;

export function UiButton(props: UiButtonProps) {
  const { variant, fullWidth, className, ...rest } = props;

  const computedClassName = buttonVariants({ variant, fullWidth, className });

  if ('href' in props && props.href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a className={computedClassName} {...linkProps} href={props.href} />;
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={computedClassName} {...buttonProps} />;
}
