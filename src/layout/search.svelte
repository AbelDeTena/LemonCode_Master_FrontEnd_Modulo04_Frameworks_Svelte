<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Filter } from "../components/index";

  export let filter: Filter;
  export let stats: string[];
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

  const dispatch = createEventDispatcher();

  function updateFilter() {
    dispatch("filterUpdated", filter);
  }
</script>

<form>
  <label for="nameFilter">Search by name:</label>
  <input
    type="text"
    id="nameFilter"
    bind:value={filter.Name}
    on:input={updateFilter}
  />

  <label for="typeFilter">Search by type:</label>
  <select id="typeFilter" bind:value={filter.Type} on:change={updateFilter}>
    <option value="">All</option>
    {#each types as type}
      <option value={type}>{type}</option>
    {/each}
  </select>

  <label>
    Advanced Search:
    <input
      type="checkbox"
      bind:checked={filter.AdvancedSearch}
      on:change={updateFilter}
    />
  </label>

  {#if filter.AdvancedSearch}
    <div>
      <label for="advancedStat">Advanced Statistics:</label>
      <select
        id="advancedStat"
        bind:value={filter.AdvancedStat}
        on:change={updateFilter}
      >
        {#each stats as stat}
          <option value={stat}>{stat}</option>
        {/each}
      </select>

      <label for="advancedStatValue">Minimum Value:</label>
      <input
        type="range"
        id="advancedStatValue"
        min="1"
        max="250"
        step="1"
        bind:value={filter.AdvancedStatValue}
        on:input={updateFilter}
      />

      <p>Selected Value: {filter.AdvancedStatValue}</p>
    </div>
  {/if}
</form>

<style>
  form {
    position: sticky;
    top: 0;
    background-color: white;
    padding: 1em;
    border-bottom: 2px solid black;
  }
</style>
