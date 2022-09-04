import { getPokemonInfo, getPokemons } from "../../API";
import { SET_ISPOKEMONSELECTED, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = ( payload ) => ({
    type: SET_POKEMONS,
    payload
});

export const setLoading = ( payload ) => ({
    type: SET_LOADING,
    payload
})

export const setPokemonSelected = ( payload ) => ({
    type: SET_ISPOKEMONSELECTED,
    payload,
})

export const getPokemonsDetailed = () => async ( dispatch ) => {
    try { 
        dispatch(setLoading(true));
        const getPokemonsResponse = await getPokemons();
        const getPokemonInfoResponse = await Promise.all( 
            getPokemonsResponse.map( pokemon => getPokemonInfo(pokemon) ) 
        );
        
        dispatch( setPokemons(getPokemonInfoResponse) );

    } catch(e){ console.error(e) }
    finally{
        dispatch(setLoading(false))
    }
}
    
    
    