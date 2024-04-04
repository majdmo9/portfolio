"use client";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface Props extends ImageProps {
  fallback?: string;
}

const Img = ({ fallback, alt, src, ...props }: Props) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return <Image alt={alt} onError={() => setError(true)} src={error ? fallback || "" : src} {...props} />;
};

export default Img;
