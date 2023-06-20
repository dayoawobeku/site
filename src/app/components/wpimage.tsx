import Image from "next/image";
import { fetchImage } from "../api";

const WpImage = async ({ id, width, height, alt, className }: { id: number, width: number, height: number, alt: string, className: string }) => {
  const imageData = await fetchImage(id);

  return (
    <Image
      src={imageData.data.source_url}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default WpImage;
