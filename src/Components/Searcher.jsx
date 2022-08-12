import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Searcher = () => {
  return (
    <header className='flex justify-center items-center h-24 w-full'>
      <div className='relative flex justify-center items-center w-full xl:w-3/6 mx-10'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none flex-none'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <input
          type='search'
          placeholder='Search pokemons'
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-400'
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-4 py-2 focus:ring-4 focus:outline-none focus:ring-red-300'>
          Search
        </button>
      </div>
    </header>
  )
}

export default Searcher
