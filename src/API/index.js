import axios from 'axios';

export const getPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    return axios.get(baseURL)
        .then( response => {
            return response.data.results
        })
        .catch( e => console.error(e))
}

export const getPokemonInfo = async ( pokemon ) => {
    return axios.get(pokemon.url)
        .then( response => response.data)
        .catch( e => console.error(e))
}