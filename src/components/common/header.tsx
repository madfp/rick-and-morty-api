function Header() {

  return (
    <header className="text-center px-10 py-8 lg:py-10">
        <h1
          className="text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-2 lg:max-w-[50%] mx-auto"
        >
          Characters of the rick and morty series
        </h1>
        <p
          className="font-semibold 2xl:text-xl"
        >
          See the information of all the characters of the series!
        </p>
        <div
          className="flex gap-2 justify-center mt-4"
        >
          <a
            className="p-2 border border-black rounded-md hover:-translate-y-2 transition-all duration-300"
            href="https://github.com/madfp"
            target="_blank"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          </a>
          <a
            className="p-2 border rounded-md bg-blue-400 text-white transition-all duration-300 hover:bg-blue-500 font-semibold"
            href="https://rickandmortyapi.com/"
            target="_blank"
          >
            See more <svg className="inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
          </a>
        </div>
    </header>
  )
}
export default Header