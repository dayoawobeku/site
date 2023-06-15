import Image from "next/image";
import { Site } from "../../../libs/info";

const site = Site;

async function WpImage({id, className, width, height, alt}: {id: number, className: string, width: number, height: number, alt: string}) {
    const res = await fetch(`${site}/wp-json/wp/v2/media/${id}`, { next: { revalidate: 10 } })
    const data = await res.json();

    return (
        <Image
            alt={alt}
            width={width}
            height={height}
            className={className}
            src={data.source_url}
        />
    );
}

export default WpImage