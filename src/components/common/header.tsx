function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-10 py-5 bg-gray-300">
        <h2 className="text-xl font-bold cursor-pointer hover:opacity-[.5] transition-all duration-300">
            Rick and Morty API
        </h2>
        <nav>
            <a href="https://github.com/madfp" target="_blank" className="transition-all duration-300 hover:opacity-[.5]">
                <img src="./github.svg" alt="" className="w-5"/>
            </a>
        </nav>
    </header>
  )
}
export default Header