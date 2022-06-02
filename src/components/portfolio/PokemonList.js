import PokemonCard from "./PokemonCard";


const pokeDexContainerStyle = {
    height: "80px"
}
export const pokemonListStyle = {
    // float: "left",
    display: "inline-block",
    width: "200px",
    height: "100px"
}
export default function PokemonList({ list, onPokemonSelect }) {

    return <ul style={pokeDexContainerStyle}>
        {
            list.map(pokemon => {
                return <li key={pokemon.name} style={pokemonListStyle} onClick={() => onPokemonSelect(pokemon)}>
                    <PokemonCard pokemon={pokemon} />
                </li>
            })
        }
    </ul>
}