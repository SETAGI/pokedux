import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemonList">
            {pokemons.map( (pokemon) => 
                <PokemonCard 
                    key={pokemon.name}
                    name={pokemon.name}
                    id={pokemon.id}
                    image={pokemon.sprites.front_default}
                    abilities = { pokemon.abilities }
                    favorite={pokemon.favorite}
                />
            )}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonList;