"use client";

import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function BlurImage({ src, width, height, alt, allClass, loadClass, doneClass, ...props }: { src: any, width: number, height: number, alt: string, allClass: string, loadClass: string, doneClass: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      width={width}
      height={height}
      alt={alt}
      src={src}
      className={cn(
        allClass,
        isLoading
          ? loadClass
          : doneClass
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
