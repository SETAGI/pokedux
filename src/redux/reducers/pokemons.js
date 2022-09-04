// import { SET_POKEMONS, SET_LOADING, SET_ISPOKEMONSELECTED } from "../actions/types"

// const initialState = {
//     pokemons: [],
//     loading: false
// }

// export const pokemonsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_POKEMONS : return { ...state, pokemons: action.payload }

//         case SET_ISPOKEMONSELECTED: 

//             const newPokemonsArray = [...state.pokemons];
//             const pokemonSelectedIndex = newPokemonsArray.findIndex( pokemon => pokemon.id === action.payload);
//             newPokemonsArray[pokemonSelectedIndex].favorite = !newPokemonsArray[pokemonSelectedIndex].favorite;
            
//             if(pokemonSelectedIndex < 0) return state;
//             return { ...state, pokemons: newPokemonsArray }

//         case SET_LOADING : return { ...state, loading: action.payload }

//         default: return state; 
//     }
// }