import Link from "next/link";
import { Site, menuID } from "../../../lib/info";

async function Menu() {

    const res = await fetch(`${Site}/wp-json/options/menu/${menuID}`, { next: { revalidate: 10 } })
    const data = await res.json();
    
    return (
        data.map((item: any) => (
            <Link key={item.url} href={item.url} className="menu-item relative py-1 px-2 bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-sm border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow z-20">
                {item.title}
            </Link>
        ))
    );

}

export default Menu