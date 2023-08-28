<script lang="ts">
  import type { PokemonDetail } from "../components/index";

  export let showModal = false;
  export let pokemon: PokemonDetail;

  function closeModal() {
    showModal = false;
  }
</script>

<div class="modal" style="display: {showModal ? 'block' : 'none'}">
  <div class="modal-content">
    <div class="modal-data">
      <div class="modal-data-description">
        <span class="modal-data--id">#{pokemon.id}</span>
        <span class="modal-data--name">{pokemon.name.toUpperCase()}</span>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
      <div class="types">
        {#each pokemon.types as type}
          <span class={type}>{type}</span>
        {/each}
      </div>
    </div>
    <div class="modal-stats {pokemon.types[0]}">
      <h2>Stats:</h2>
      <div class="modal-stats--valour">
        {#each pokemon.stats as stat (stat.name)}
          <div><span>{stat.name}:</span><span>{stat.value}</span></div>
        {/each}
      </div>
      <div>
        <button class="close-button" on:click={closeModal}>Close</button>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    font-family: "Roboto", sans-serif;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5% auto;
    border: 3px solid rgb(61, 61, 61);
    border-radius: 20px;
    max-width: 250px;
    background: linear-gradient(to right, #ffffff, #e5e5e5);
    overflow: hidden;
  }
  .modal-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }
  .modal-data-description {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-data--id {
    padding: 1em;
    border-radius: 100%;
    font-size: large;
  }
  .modal-data--name {
    flex: 1;
    text-align: center;
    font-size: large;
  }

  img {
    width: 200px;
  }

  .types {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .types span {
    display: inline-block;
    padding: 0.5em;
    border-radius: 50px;
    width: 80px;
    text-align: center;
    color: white;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  .bug {
    background-color: #a8b820;
  }

  .dragon {
    background-color: #7038f8;
  }

  .electric {
    background-color: #f8d030;
  }

  .fairy {
    background-color: #a040a0;
  }

  .fighting {
    background-color: #c03028;
  }

  .fire {
    background-color: #f08030;
  }

  .flying {
    background-color: #a890f0;
  }

  .ghost {
    background-color: #705898;
  }

  .grass {
    background-color: #78c850;
  }

  .ground {
    background-color: #e0c068;
  }

  .ice {
    background-color: #98d8d8;
  }

  .normal {
    background-color: #a8a878;
  }

  .poison {
    background-color: #a040a0;
  }

  .psychic {
    background-color: #f85888;
  }

  .rock {
    background-color: #b8a038;
  }

  .water {
    background-color: #6890f0;
  }

  .modal-stats {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .modal-stats h2 {
    font-size: 18px;
    color: #232323;
  }

  .modal-stats--valour {
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
  }

  .modal-stats--valour div {
    width: 100%;
    font-size: 1.2em;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

  .close-button {
    background-color: transparent;
    border: none;
    color: #333;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .close-button:hover {
    color: #ff0000;
  }
</style>
