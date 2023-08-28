<script lang="ts">
  import type { PokemonDetail } from "../components/index";
  import { Modal } from "./index";

  export let filteredList: PokemonDetail[];

  let showModal: boolean[] = new Array(filteredList.length).fill(false);

  function openModal(index: number) {
    showModal[index] = true;
  }

  function closeModal(index: number) {
    showModal[index] = false;
  }
</script>

<section>
  {#each filteredList as pokemon, index (pokemon)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <article on:click={() => openModal(index)}>
      <header>
        <p class="accent">#{pokemon.id}</p>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      </header>
      <img src={pokemon.image} alt={pokemon.name} />
    </article>
    {#if showModal[index]}
      <Modal bind:showModal={showModal[index]} {pokemon} />
    {/if}
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 2em;
  }

  article {
    list-style: none;
    background: linear-gradient(to bottom, #ffffff, #fcfada);
    border: 2px solid red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }
  article:hover {
    cursor: pointer;
    border-color: black;
  }

  header {
    background-color: red;
    width: 100%;
    padding: 0px 5px;
    color: rgb(250, 250, 53);
    font-weight: bold;
  }

  .accent {
    color: rgb(62, 62, 111);
    font-size: large;
  }
</style>
