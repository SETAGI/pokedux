import { SET_POKEMONS, SET_ISPOKEMONSELECTED } from "../actions/types"

const initialState = {
    pokemons: []
}

export const pokemonsDataReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS : return { ...state, pokemons: action.payload }

        case SET_ISPOKEMONSELECTED: 

            const newPokemonsArray = [...state.pokemons];
            const pokemonSelectedIndex = newPokemonsArray.findIndex( pokemon => pokemon.id === action.payload);
            newPokemonsArray[pokemonSelectedIndex].favorite = !newPokemonsArray[pokemonSelectedIndex].favorite;
            
            if(pokemonSelectedIndex < 0) return state;
            return { ...state, pokemons: newPokemonsArray }

        default: return state; 
    }
}