"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchImageData } from "../api";

interface ImageData {
  source_url: string;
}

interface WpImageProps {
  id: number;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const WpImage: React.FC<WpImageProps> = ({ id, width, height, alt, className }) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    fetchImageData(id)
      .then((data: ImageData) => {
        setImageData(data);
      })
      .catch((error: Error) => {
        console.error("Error fetching image data:", error);
      });
  }, [id]);

  if (!imageData) {
    return null;
  }

  return (
    <Image
      src={imageData.source_url}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default WpImage;
