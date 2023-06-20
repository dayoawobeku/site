"use client"

import { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 500) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0,behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed right-16 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll to top"
        type="button"
        onClick={handleScrollTop}
        className='p-2 transition-all duration-100 rounded-full bg-gray-100/75 dark:bg-gray-800/75 backdrop-blur-sm border border-solid outline outline-1 border-white outline-neutral-200 dark:border-white/5 dark:outline-neutral-950 shadow-sm hover:shadow-md hover:-translate-y-1 active:shadow active:translate-y-0'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className='block h-5 w-5 fill-current'><path d="M4 10V6.5H2.7A1 1 0 0 1 2 4.8l3.3-3.3a1 1 0 0 1 1.4 0L10 4.8a1 1 0 0 1-.7 1.7H8V10c0 .5-.5 1-1 1H5a1 1 0 0 1-1-1Zm1 0h2V6c0-.3.2-.5.5-.5h1.8L6 2.2 2.7 5.5h1.8c.3 0 .5.2.5.5v4Z"/></svg>
      </button>
    </div>
  )
}

export default ScrollTop
