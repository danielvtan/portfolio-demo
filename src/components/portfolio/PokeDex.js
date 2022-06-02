import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";


const searchStyle = {
    margin: "20px"
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
        if(pokeDex.length === 3) return alert("Max PokeDex");
        console.log(pokeDex);
        if(pokeDex.includes(pokemon)) return alert("Already added");

        setPokeDex([...pokeDex, pokemon]);
        localStorage.setItem("pokedex", JSON.stringify([...pokeDex, pokemon]));
    }
    const onPokemonUnSelect =(pokemonToRemove)=> {

        const newPokeDex = [...pokeDex].filter(pokemon => pokemon.name !== pokemonToRemove.name);
        setPokeDex(newPokeDex);
    }
    return <>
        <h1>PokeDex</h1>
        <PokemonList list={pokeDex} onPokemonSelect={onPokemonUnSelect} />
        <input style={searchStyle} type="text" placeholder="search pokemon" name="searchPokemon" onChange={onSearchChange} />
        <PokemonList onPokemonSelect={onPokemonSelect} list={pokemons.filter(pokemon => search.length === 0 || pokemon.name.includes(search))} />
    </>
}
