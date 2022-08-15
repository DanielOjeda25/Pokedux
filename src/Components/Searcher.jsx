import logo from '../assets/pokeLogosvg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchBar } from '../styles'

const Searcher = () => {
  return (
    <header className={`${SearchBar.header}`}>
      <div className={`${SearchBar.div1}`}>
        <img src={logo} className={`${SearchBar.img}`} />
      </div>
      <div className={`${SearchBar.div2}`}>
        <div className={`${SearchBar.div3}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${SearchBar.FavIcon}`}
          />
        </div>
        <input
          type='search'
          placeholder='Search pokemons'
          className={`${SearchBar.input}`}
        />
        <button type='submit' className={`${SearchBar.button}`}>
          Search
        </button>
      </div>
    </header>
  )
}

export default Searcher
