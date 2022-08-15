import axios from 'axios'

const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.error(err))
}

export default getPokemons
