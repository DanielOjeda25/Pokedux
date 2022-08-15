import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { PokeCard as Pk } from '../styles'
const PokeCard = ({ name }) => {
  return (
    <div className={`${Pk.div1}`}>
      <div className={`${Pk.div2}`}>
        <div className={`${Pk.div3}`}>
          <FontAwesomeIcon
            icon={faStar}
            className={`${Pk.FontIcon}`}	
          />
        </div>
        <div className={`${Pk.div4}`}>
          <h2>{name}</h2>
        </div>

        <div className={`${Pk.div5}`}>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            className={`${Pk.img}`}
          />
        </div>
        <div className={`${Pk.div6}`}>
          <p>Type: Magic</p>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
