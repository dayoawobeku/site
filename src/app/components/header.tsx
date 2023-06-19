"use client";

import Link from "next/link";
import Logo from "./logo";
import Menu from "./menu";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleNav = () => {
    setToggle((toggle) => {
      return !toggle;
    });
  };

  return (
    <header className="relative flex items-center justify-between py-5 md:py-10 z-[9999]">
      <div>
        <Link id="homeLink" href="/" aria-label="Home">
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center text-base leading-5">
        <div>
          <Menu mobile={false} toggle={toggleNav} />
        </div>
      </div>
      <div className="block md:hidden text-base leading-5">
        <div
            id="mobileMenu"
            className={`absolute right-0 mt-10 w-36 origin-top-right border outline outline-1 border-white outline-neutral-200 dark:border-white/5 dark:outline-neutral-950 bg-gray-100/75 dark:bg-gray-800/75 backdrop-blur-md rounded-md drop-shadow-md transition-all ${toggle ? 'scale-100' : 'scale-0'}`}
            ref={menuRef}
          >
            <div className="py-1">
              <Menu mobile={true} toggle={toggleNav} />
            </div>
          </div>
        <button
          onClick={toggleNav}
          className="relative ml-2 bg-transparent cursor-pointer bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-full hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-sm border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow z-20"
          aria-label="Toggle Menu"
          type="button"
          ref={toggleButtonRef}
          style={{ transform: "none" }}
        >
          <div className="flex h-8 w-8 items-center justify-center p-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
            >
              <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
