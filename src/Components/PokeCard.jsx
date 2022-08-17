import React from 'react'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../features/dataSlices'
import StartButton from './StartButton'

const PokeCard = ({ name, image, types, id, favorite }) => {
  const typesString = types.map((elem) => elem.type.name).join(', ')

  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }
  return (
    <div className='flex justify-center'>
      <div
        className='block shadow-lg bg-white max-w-sm w-full text-center relative rounded-xl '
        onClick={handleOnFavorite}>
        <div className='flex absolute top-2 right-1 items-center pl-3 pointer-events-none flex-none hover:text-yellow-500 z-10 dark:hover:text-yellow-500'>
          <StartButton isFavorite={favorite} />
        </div>
        <div className='py-3 px-6 border-b border-gray-300 dark:bg-gray-600 dark:text-white dark:border-slate-500'>
          <h2 className='font-bold text-2xl'>{name}</h2>
        </div>

        <div className='p-6 dark:bg-gray-600'>
          <img src={image} className='w-full' />
        </div>
        <div className='py-3 px-6 border-t border-gray-300 text-gray-600  dark:bg-gray-600 dark:text-white dark:border-slate-500 text-xl'>
          <p>Type: {typesString}</p>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
