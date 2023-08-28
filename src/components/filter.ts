import type { PokemonDetail } from "./index";
import type { Filter } from "../components/index";

export function filterPokemons(
  pokemonsList: PokemonDetail[],
  filter: Filter,
  stats: string[]
): PokemonDetail[] {
  return pokemonsList.filter((pokemon) => {
    const nameMatch =
      filter.Name === "" ||
      pokemon.name.toLowerCase().includes(filter.Name.toLowerCase());
    const typeMatch =
      filter.Type === "" || pokemon.types.includes(filter.Type.toLowerCase());

    if (filter.AdvancedSearch) {
      const selectedStatName = stats.find(
        (stat) => stat === filter.AdvancedStat
      );

      if (selectedStatName) {
        const statValue =
          pokemon.stats.find((stat) => stat.name === selectedStatName)?.value ??
          0;
        return nameMatch && typeMatch && statValue >= filter.AdvancedStatValue;
      } else {
        return nameMatch && typeMatch;
      }
    }

    return nameMatch && typeMatch;
  });
}
