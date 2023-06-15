import Link from "next/link";
import { Site } from "../../../libs/info";

const site = Site;

async function Menu() {

    const res = await fetch(`${site}/wp-json/options/menu/3`, { next: { revalidate: 10 } })
    const data = await res.json();
    
    return (
        data.map((item: any) => (
            <Link key={item.id} href={item.url} className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3">
                {item.title}
            </Link>
        ))
    );

}

export default Menu