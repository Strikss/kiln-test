import type { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

type UiLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function UiLink(props: UiLinkProps) {
  return (
    <a
      {...props}
      className={clsx(props.className, 'hover:underline')}
      target={props.target || '_blank'}
      rel={props.rel || 'noopener noreferrer'}
    />
  );
}
