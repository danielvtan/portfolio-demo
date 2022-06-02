import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";


const pokemonListStyle = {
    // float: "left",
    display: "inline-block",
    width: "200px",
    height: "100px"
}
const searchStyle = {
    margin: "20px"
}
const pokeDexContainerStyle = {
    height: "80px"
}
export default function PokeDex() {
    const [pokemons, setPokemons] = useState([]);
    const [pokeDex, setPokeDex] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("on any state");
    });

    useEffect(() => {
        console.log("on initial load");
        console.log(localStorage.getItem("pokedex") ?? []);
        setPokeDex(JSON.parse(localStorage.getItem("pokedex")) ?? []);

        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(result => {
                return result.json();
            }).then(result => {
                console.log(result.results);

                setPokemons(result.results);
            })

    }, []);

    const onSearchChange =(data)=> {
        console.log(data.target.value);

        setSearch(data.target.value);
    }
    const onPokemonSelect =(pokemon)=> {
        if(pokeDex.length == 3) return alert("Max PokeDex");
        console.log(pokeDex);
        if(pokeDex.includes(pokemon)) return alert("Already added");

        setPokeDex([...pokeDex, pokemon]);
        localStorage.setItem("pokedex", JSON.stringify([...pokeDex, pokemon]));
    }
    const onPokemonUnSelect =(pokemonToRemove)=> {

        const newPokeDex = [...pokeDex].filter(pokemon => pokemon.name != pokemonToRemove.name);
        setPokeDex(newPokeDex);
    }
    return <>
        <h1>PokeDex</h1>
        <ul style={pokeDexContainerStyle}>
            {
                pokeDex.map(pokemon => {
                    return <li key={pokemon.name} style={pokemonListStyle} onClick={()=> onPokemonUnSelect(pokemon)}>
                        <PokemonCard pokemon={pokemon} />
                    </li>
                })
            }
        </ul> 
        <input style={searchStyle} type="text" placeholder="search pokemon" name="searchPokemon" onChange={onSearchChange} />
        <ul>
            {
                pokemons.filter(pokemon => search.length == 0 || pokemon.name.includes(search)).map(pokemon => {
                    return <li key={pokemon.name} style={pokemonListStyle} onClick={()=> onPokemonSelect(pokemon)}>
                        <PokemonCard pokemon={pokemon} />
                    </li>
                })
            }
        </ul>
    </>
}
