import { cva, type VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'w-fit text-center font-medium shadow-sm transition-all duration-100 hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-black-1 text-gray-1',
        secondary: 'text-black-main border border-border-main',
      },
      size: {
        md: 'py-2 px-4 text-sm',
        lg: 'py-2.5 px-4 text-sm',
        sm: 'py-1 px-2.5 text-xs',
      },
      fullWidth: {
        true: 'w-full',
      },
      iconOnly: {
        true: 'p-2.5!',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

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
  const { variant, size, fullWidth, className, iconOnly, ...rest } = props;

  const computedClassName = buttonVariants({ variant, size, fullWidth, className, iconOnly });

  if ('href' in props && props.href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={computedClassName}
        {...linkProps}
        href={props.href}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
      />
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={computedClassName} {...buttonProps} />;
}
