import type {SinglePokemon, PokemonTypes, PokemonDetail, PokemonStat} from "./model"

export async function getPokemonData(url: string):Promise<SinglePokemon[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export async function getPokemonDetail(pokemons:SinglePokemon[]):Promise<PokemonDetail[]> {
  const pokemonDetails = await Promise.all(
  pokemons.map(async (pokemon: SinglePokemon) => {
    const response = await fetch(pokemon.url)
    const pokemonDetail = await response.json();
    return {
      id: pokemonDetail.id,
      name: pokemon.name,
      image: pokemonDetail.sprites.front_default,
      types: pokemonDetail.types.map((type: PokemonTypes) => type.type.name),
      stats: pokemonDetail.stats.map((stat: PokemonStat) => ({
        name: stat.stat.name,
        value: stat.base_stat
      }))
    };
  })
  );
  console.log(pokemonDetails);
  return pokemonDetails;
}
