import WpImage from "./wpimage";
import { fetchLogo } from "../lib/api";

async function Logo() {
    const { data: site } = await fetchLogo();

    if ( site?.site_logo ) {
        return (
            <>
                <WpImage
                    id={site?.site_logo}
                    width={32}
                    height={32}
                    alt={site?.name}
                    className="rounded-full outline outline-2 outline-black/25 dark:outline-white/25 mr-2"
                />
                <span>{site?.name}</span>
            </>
        );
    }
}

export default Logo