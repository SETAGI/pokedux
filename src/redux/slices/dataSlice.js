import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonInfo, getPokemons } from '../../API';
import { setLoading } from './loadingSlice';

const initialState = {
    pokemons: [],
    filteredPokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async ( _ , {dispatch} ) => {
        dispatch( setLoading(true) )
        const getPokemonsResponse = await getPokemons();
        const getPokemonInfoResponse = await Promise.all( 
            getPokemonsResponse.map( pokemon => getPokemonInfo(pokemon) ) 
        );
        
        dispatch( setPokemons(getPokemonInfoResponse) );
        dispatch( setLoading(false) )
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: ( state, action ) => {
            state.pokemons = action.payload;
            state.filteredPokemons = action.payload;
        },
        setPokemonSelected: ( state, action ) => {
            const pokemonSelectedIndex = state.pokemons.findIndex( pokemon => pokemon.id === action.payload);
            const pokemonFilteredSelectedIndex = state.filteredPokemons.findIndex( pokemon => pokemon.id === action.payload);
            
            if(pokemonSelectedIndex >= 0){
                state.pokemons[pokemonSelectedIndex].favorite = !state.pokemons[pokemonSelectedIndex].favorite;
                state.filteredPokemons[pokemonFilteredSelectedIndex].favorite = !state.filteredPokemons[pokemonFilteredSelectedIndex].favorite;
            }
        },
        setFilteredPokemons: ( state, action ) => {
            state.filteredPokemons = state.pokemons.filter( pokemon => pokemon.name.includes(action.payload));
        }
    }
})

export const { setPokemons, setPokemonSelected, setFilteredPokemons } = dataSlice.actions;

export default dataSlice.reducer;