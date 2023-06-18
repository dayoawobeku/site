import WpImage from "./wpimage";
import { Site } from "../../../lib/info";

const site = Site;

async function Logo() {
    const res = await fetch(`${site}/wp-json/`, { next: { revalidate: 10 } })
    const data = await res.json();

    if ( data.site_logo ) {
        return (
            <>
                <WpImage
                    id={data.site_logo}
                    width={32}
                    height={32}
                    alt={data.name}
                    className="rounded-full outline outline-2 outline-black/25 dark:outline-white/25 mr-2"
                />
                <span>{data.name}</span>
            </>
        );
    }
}

export default Logo