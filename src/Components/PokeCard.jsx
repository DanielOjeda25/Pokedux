import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const PokeCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='block rounded-xl shadow-lg bg-white max-w-sm w-full text-center relative '>
        <div className='flex absolute top-2 right-2 items-center pl-3 pointer-events-none flex-none'>
          <FontAwesomeIcon icon={faStar} className='h-4' />
        </div>
        <div className='py-3 px-6 border-b border-gray-300'>
          <h2>Dito</h2>
        </div>

        <div className='p-6'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            className='w-full'
          />
        </div>
        <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
          <p>Type: Magic</p>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
