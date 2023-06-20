import Image from "next/image";
import { fetchImage } from "../lib/api";

async function WpImage({id, className, width, height, alt}: {id: number, className: string, width: number, height: number, alt: string}) {
    const image = await fetchImage(id);

    return (
        <Image
            alt={alt}
            width={width}
            height={height}
            className={className}
            src={image.data.source_url}
        />
    );
}

export default WpImage