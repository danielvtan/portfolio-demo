
export default function PokemonCard({ pokemon }) {

    return <>
        <div>{pokemon.name}</div>
        <img width={80} src={getPokemonImage(pokemon.url)} alt={pokemon.name} />
    </>
}


function getPokemonImage(url) {
    const id = getPokemonId(url);
    const newUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return newUrl;
}

function getPokemonId(url) {
    // const id = url.split("httpAs://pokeapi.co/api/v2/pokemon/")[1].split("/")[0];
    const id = url.split("/").at(-2);
    return id;
}

getPokemonId("https://pokeapi.co/api/v2/pokemon/102/");