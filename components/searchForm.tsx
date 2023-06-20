function SearchForm() {
    return (
        <form className="relative max-w-lg" method="GET" action="/search/" autoComplete="off">
            <input name="q" type="search" aria-label="Search blog" placeholder="Search blog" className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
            <button typeof="submit" className="absolute right-3 top-3 ">
                <svg className="h-5 w-5 stroke-current text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </form>
    )
}

export default SearchForm