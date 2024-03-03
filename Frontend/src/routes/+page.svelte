<script>
  import { onMount } from "svelte";

  /** @type {Array<{name: string, url: string, district: string|null}>} */
  let venues = [];
  let loading = false;
  /**
   * @type {string | null}
   */
  let selectedDistrict = null;

  onMount(async () => {
    loading = true;
    const res = await fetch("http://localhost:3000/api/venues");
    const data = await res.json();
    venues = data;
    loading = false;
  });

  /**
   * @param {string | null} district
   */
  function filterVenues(district) {
    selectedDistrict = district;
  }

  function clearFilter() {
    selectedDistrict = null;
  }
</script>

<!-- Jumbotron -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Välkommen till ditt JÖNKÖPING</h1>
  </div>
</div>

<!-- District Filters -->
<div class="container">
  <div class="row">
    <div class="col-md-2">
      <div class="district" on:click={() => filterVenues("Öster")}>Öster</div>
    </div>
    <div class="col-md-2">
      <div class="district" on:click={() => filterVenues("Väster")}>Väster</div>
    </div>
    <div class="col-md-2">
      <div class="district" on:click={() => filterVenues("Tändsticksområdet")}>
        Tändsticksområdet
      </div>
    </div>
    <div class="col-md-2">
      <div class="district" on:click={() => filterVenues("Atollen")}>
        Atollen
      </div>
    </div>
    <div class="col-md-2">
      <div class="district" on:click={() => filterVenues("Resecentrum")}>
        Resecentrum
      </div>
    </div>
    <div class="col-md-1">
      <div class="district" id="filter" on:click={() => clearFilter()}>
        Clear Filter
      </div>
    </div>
  </div>
</div>

<!-- 3-Grid with Pictures and Paragraphs -->
<div class="container mt-4">
  {#if loading}
    <p>Loading...</p>
  {/if}
  <div class="row">
    <div class="col-md-4">
      {#each venues as venue}
        {#if venue.district === selectedDistrict}
          <div class="grid-item mb-4">
            <a href={venue.url} />
            <p>{venue.name}</p>
          </div>
        {/if}
      {/each}
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
  .district {
    min-width: 200px;
    min-height: 200px;
    border: 5px solid black;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    /* background-color: red; */
  }
  #filter {
    border: none;
    min-width: 150px;
    min-height: 50px;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
</style>
