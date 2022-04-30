import { SearchIcon } from '@heroicons/react/outline'

const SearchBar = ({ userName, handleClick, userRef }) => {
  return (
    <div className=" align-items mx-auto mt-4 flex max-w-md justify-between space-x-2 rounded-lg bg-gray-200 p-2 pb-2 transition duration-300 ease-in dark:bg-[#121212] md:max-w-2xl">
      <SearchIcon className="mt-3 ml-2 h-6 w-6 text-[#1C1E21] dark:text-[#e5dad4]" />
      <input
        name="search"
        ref={userRef}
        placeholder="Renseigner un nom d'utilisateur GitHub"
        className="text-md dark:text-white-200 mt-1 w-[400px] rounded-md bg-gray-200 px-2 py-2 font-mono leading-6 placeholder-neutral-400 transition duration-300 ease-in focus:outline-none dark:bg-[#121212]"
      />
      <button onClick={handleClick} class="cssbuttons-io-button">
        {' '}
        Rechercher
        <div class="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  )
}

export default SearchBar
