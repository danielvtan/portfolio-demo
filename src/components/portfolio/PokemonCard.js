




export default function PokemonCard({ pokemon }) {

    return <>
        <div>{pokemon.name}</div>
        <img width={80} src={getPokemonImage(pokemon.url)} />
    </>
}


function getPokemonImage(url) {
    const id = getPokemonId(url);
    const newUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return newUrl;
}

function getPokemonId(url) {
    const id = url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0];
    return id;
}

// getPokemonId("https://pokeapi.co/api/v2/pokemon/102/");