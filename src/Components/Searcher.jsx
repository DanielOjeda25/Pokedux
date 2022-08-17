import logo from '../assets/pokeLogosvg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setFilter } from '../features/dataSlices'

const Searcher = () => {
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value))
  }
  return (
    <header className='flex justify-center items-center h-24 w-full flex-col'>
      <div className='aspect-w-16 aspect-h-9 flex justify-center items-center mt-8 mb-3'>
        <img src={logo} className='xsm:w-2/3' />
      </div>
      <div className='relative flex justify-center items-center w-full xl:w-3/6'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none flex-none hover:text-slate-400 '>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='dark:text-white z-10 hover:cursor-pointer'
          />
        </div>
        <input
          onChange={handleOnChange}
          type='search'
          placeholder='Search pokemons'
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
       
      </div>
    </header>
  )
}

export default Searcher
