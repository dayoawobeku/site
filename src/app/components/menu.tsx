import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMenu } from "../api";

const Menu = ({mobile, toggle}: {mobile: boolean, toggle: any}) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenu()
      .then((data: any) => {
        setMenuData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  if ( mobile ) {
    return (
        <>
            {menuData.map((item: any) => (
            <Link key={item.url} href={item.url} className="menu-item" onClick={toggle}>
                <span className="text-zinc-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 block px-4 py-2 text-sm">
                    {item.title}
                </span>
            </Link>
            ))}
        </>
    );
  } else {
    return (
        <>
            {menuData.map((item: any) => (
            <Link key={item.url} href={item.url} className="lg-menu-item relative py-1 px-2 bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-sm border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow z-20">
                {item.title}
            </Link>
            ))}
        </>
    );
  }
};

export default Menu;
