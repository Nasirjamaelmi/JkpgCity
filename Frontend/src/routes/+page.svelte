<script>
  import { onMount } from "svelte";

  /** @type {Array<{name: string, url: string, district: string|null}>} */
  let venues = [];
  let loading = false;

  onMount(async () => {
    loading = true;
    const res = await fetch("http://localhost:3000/api/venues");
    const data = await res.json();
    venues = data;
    loading = false;
  });
</script>

<!-- Jumbotron -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Välkommen till ditt JÖNKÖPING</h1>
  </div>
</div>

<!-- 3-Grid with Pictures and Paragraphs -->
<div class="container">
  {#if loading}
    <p>Loading...</p>
  {/if}
  <div class="row">
    <div class="col-md-4">
      {#each venues as venue}
        <div class="grid-item">
          <a href={venue.url} />
          <p>{venue.name}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- 4-Grid Clickable Section -->
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <a href="#" class="grid-item">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Grid 1"
          class="img-fluid grid-img"
        />
      </a>
    </div>
    <div class="col-md-3">
      <a href="#" class="grid-item">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Grid 2"
          class="img-fluid grid-img"
        />
      </a>
    </div>
    <div class="col-md-3">
      <a href="#" class="grid-item">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Grid 3"
          class="img-fluid grid-img"
        />
      </a>
    </div>
    <div class="col-md-3">
      <a href="#" class="grid-item">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Grid 4"
          class="img-fluid grid-img"
        />
      </a>
    </div>
  </div>
</div>

<!-- Footer -->
<footer>
  <div class="container">
    <p>&copy; 2024 Välkommen till Jönköping</p>
  </div>
</footer>

<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>

<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
  .grid-img {
    height: 200px;
    object-fit: cover;
  }
  .grid-item {
    transition: transform 0.3s;
  }
  .grid-item:hover {
    transform: scale(1.05);
  }
  footer {
    background-color: #f8f9fa;
    padding: 20px 0;
    text-align: center;
  }
</style>
