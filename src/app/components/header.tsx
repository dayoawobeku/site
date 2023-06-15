"use client";

import Link from "next/link";
import Menu from "./menu";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const toggleNav = (): void => {
        setToggle((status: boolean) => {
            document.body.setAttribute('data-menu', `${!status ? 'show' : 'hide'}`);

            return !status;
        });
    }

    return (
        <header className="relative flex items-center justify-between py-5 md:py-10 z-20">
            <div>
                <Link id="homeLink" href="/" aria-label="Mere Musings">
                    <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                        David M. Coleman
                    </div>
                </Link>
            </div>
            <div className="hidden md:flex items-center text-base leading-5">
                <div>
                    <Menu />
                </div>
            </div>
            <div className="block md:hidden text-base leading-5">
                <div id="mobileMenu" className="absolute block py-7 inset-0">
                    <Menu />
                </div>
                <button onClick={toggleNav} className="relative ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-primary-400 hover:ring-1 dark:bg-zinc-700 dark:ring-primary-700 dark:hover:bg-primary-600 z-20" aria-label="Toggle Menu" type="button" style={{transform: 'none'}}>
                    <div className="flex h-8 w-8 items-center justify-center p-2">
                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path></svg>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header