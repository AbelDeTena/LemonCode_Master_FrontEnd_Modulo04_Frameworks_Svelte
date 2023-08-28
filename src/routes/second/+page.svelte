<script lang="ts">
  import { onMount } from "svelte";
  import type { PokemonDetail, Filter } from "../../components/index";
  import { Search, Content } from "../../layout/index";
  import {
    getPokemonData,
    getPokemonDetail,
    filterPokemons,
  } from "../../components/index";

  const url: string = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
  let pokemonsList: PokemonDetail[] = [];

  onMount(async () => {
    try {
      let pokemons = await getPokemonData(url);
      const pokemonDetails = await getPokemonDetail(pokemons);
      pokemonsList = pokemonDetails;
      console.log(pokemonsList);
    } catch (error) {
      console.error("Error al obtener datos de la PokeAPI", error);
    }
  });

  let filter = {
    Name: "",
    Type: "",
    Stats: "",
    AdvancedSearch: false,
    AdvancedStat: "",
    AdvancedStatValue: 1,
  };

  const types: string[] = [
    "Bug",
    "Dragon",
    "Electric",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Water",
  ];
  const stats: string[] = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  $: filteredList = filterPokemons(pokemonsList, filter, stats);

  function handleFilterUpdate(event: { detail: Filter }) {
    filter = event.detail;
    filteredList = filterPokemons(pokemonsList, filter, stats);
  }
</script>

<Search {filter} {stats} on:filterUpdated={handleFilterUpdate} />
<Content {filteredList} />
