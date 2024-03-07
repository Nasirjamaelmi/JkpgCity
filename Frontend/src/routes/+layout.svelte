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
  <main class="height">
    <slot />
  </main>
  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2024 Välkommen till Jönköping</p>
    </div>
  </footer>
</div>

<style>
  .container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    /* You can add other styling properties as needed */
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 60px; /* Adjust the height as needed */
    background-color: #f0f0f0;
  }

  .height {
    padding-bottom: 80px; /* Adjust the padding to accommodate the fixed footer */
  }
</style>
