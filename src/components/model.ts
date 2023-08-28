export interface SinglePokemon {
  name: string;
  url: string;
}

export interface PokemonTypes {
  slot: number;
  type: SinglePokemon;
}

export interface PokemonStat {
    base_stat: number,
    effort: number,
    stat: SinglePokemon
}

interface PokemonAttribute{
    name: string,
    value: number
}

export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: PokemonAttribute[]
}

export interface Filter {
  Name: string;
  Type: string;
  Stats: string;
  AdvancedSearch: boolean;
  AdvancedStat: string;
  AdvancedStatValue: number;
}

