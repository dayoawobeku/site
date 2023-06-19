"use client";

import { useState, useEffect } from "react";
import { fetchImageData } from "../api";

interface WpImageProps {
  id: number;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const WpImage: React.FC<WpImageProps> = ({ id, width, height, alt, className }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchImageData(id)
      .then((data: any) => {
        setImageData(data);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }, [id]);

  if (!imageData) {
    return null;
  }

  return (
    <img
      src={imageData.source_url}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default WpImage;
