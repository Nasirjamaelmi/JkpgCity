<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
  <title>Välkommen till Jönköping</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</svelte:head>

<div class="app">
  <div class="pt-16">
    <Navbar />
  </div>
  <main>
    <slot />
  </main>
</div>

<style>
</style>
