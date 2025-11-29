import { useState, type ImgHTMLAttributes } from 'react';
import AltImage from '@/assets/alt-image.webp';
import clsx from 'clsx';

type UiImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function UiImage(props: UiImageProps) {
  const [hasError, setHasError] = useState(false);

  function handleError() {
    if (!hasError && props.src !== AltImage) {
      setHasError(true);
    }
  }

  const imgSrc = hasError ? AltImage : props.src;

  if (!props.src) {
    return <div className={clsx(props.className, 'bg-gray-200 animate-pulse')} />;
  }

  return <img {...props} key={props.src} src={imgSrc} onError={handleError} />;
}
