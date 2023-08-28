<script>
  import { Header, Navbar, Footer } from "../layout/index";
</script>

<div class="container">
  <Header />
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    overflow-y: scroll;
  }
</style>
