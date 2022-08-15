import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const PokeCard = ({ name, image }) => {
  return (
    <div className='flex justify-center dark:border'>
      <div className='block shadow-lg bg-white max-w-sm w-full text-center relative rounded-xl '>
        <div className='flex absolute top-2 right-2 items-center pl-3 pointer-events-none flex-none  hover:text-yellow-500'>
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 dark:text-white dark:hover:text-yellow-500'
          />
        </div>
        <div className='py-3 px-6 border-b border-gray-300 dark:bg-gray-600 dark:text-white dark:border-slate-500'>
          <h2>{name}</h2>
        </div>

        <div className='p-6 dark:bg-gray-600'>
          <img src={image} className='w-full' />
        </div>
        <div className='py-3 px-6 border-t border-gray-300 text-gray-600  dark:bg-gray-600 dark:text-white dark:border-slate-500'>
          <p>Type: Magic</p>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
