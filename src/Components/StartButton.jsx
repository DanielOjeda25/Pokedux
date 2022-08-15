import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as FS } from '@fortawesome/free-regular-svg-icons'

const StartButton = ({ isFavorite }) => {
  const Icon = isFavorite ? faStar : FS
  return (
    <button className='dark:text-white'>
      {<FontAwesomeIcon icon={Icon} />}
    </button>
  )
}

export default StartButton
