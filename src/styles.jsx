/**
 * Estilos App Temporal
 */

/**
 * Estilos del SearchBar
 */
const SearchBar = {
  header: 'flex justify-center items-center h-24 w-full flex-col',
  div1: 'aspect-w-16 aspect-h-9 flex justify-center items-center mt-8 mb-3',
  img: 'xsm:w-2/3',
  div2: 'relative flex justify-center items-center w-full xl:w-3/6',
  div3: 'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none flex-none hover:text-slate-400 ',
  FavIcon: 'dark:text-white z-10 hover:cursor-pointer',
  input:
    'block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  button:
    'text-white absolute right-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-600  focus:ring-4 focus:outline-none focus:bg-violet-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-500 dark:hover:bg-violet-600  dark:focus:bg-violet-700 ',
}

/**
 * Estilos del Grid PokemonList
 */

const PokemonList = {
  div: 'grid gap-2 grid-cols-2 sm:grid-cols-4 xsm:my-20',
}

/**
 * Estilos del PokeCard
 */
const PokeCard = {
  div1: 'flex justify-center dark:border',
  div2: 'block shadow-lg bg-white max-w-sm w-full text-center relative rounded-xl ',
  div3: 'flex absolute top-2 right-2 items-center pl-3 pointer-events-none flex-none  hover:text-yellow-500',
  FontIcon: 'h-4 dark:text-white dark:hover:text-yellow-500',
  div4: 'py-3 px-6 border-b border-gray-300 dark:bg-gray-600 dark:text-white dark:border-slate-500',
  div5: 'p-6 dark:bg-gray-600',
  img: 'w-full',
  div6: 'py-3 px-6 border-t border-gray-300 text-gray-600  dark:bg-gray-600 dark:text-white dark:border-slate-500',
}

const DarkButton = {
  button:
    'fixed z-10 right-3 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-all duration-150',
  FontIcon: 'w-5 h-5',
}
export { SearchBar, PokemonList, PokeCard, DarkButton }
