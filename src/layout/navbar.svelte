<script>
</script>

<nav>
  <a href="/">Home</a>
  <a href="/first">First generation</a>
  <a href="/second">Second generation</a>
  <a href="/third">Third generation</a>
</nav>

<style>
  nav {
    width: 100%;
    border-bottom: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  a {
    font-size: large;
    text-decoration: none;
    height: 100%;
    padding: 0.3em;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    background-color: red;
    border-radius: 5px;
  }

  @media (max-width: 628px) {
    nav {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
</style>
