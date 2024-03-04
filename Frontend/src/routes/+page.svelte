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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="district" on:click={() => filterVenues("Öster")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 1080 1080"
          class="w-full h-full"
        >
          <path
            fill="currentColor"
            d="m961.7 129.6-192.8-69h-41.2V0h-67.6v60.6H419.9V0h-67.6v60.6h-41.2l-192.8 69L0 317.3V1080h459V931.9c0-44.8 36.3-81.1 81-81.1s81 36.3 81 81.1V1080h459V316.9L961.7 129.6ZM181 959.8H98.4v-82.6H181v82.6Zm0-190.1H98.4V605.2H181v164.5Zm0-272.1H98.4V389.2H181v108.4Zm147.4 462.2h-82.6v-82.6h82.6v82.6Zm0-190.1h-82.6V605.2h82.6v164.5Zm0-272.1h-82.6V389.2h82.6v108.4Zm250.5 272.1h-82.6V605.2h82.6v164.5Zm0-272.1h-82.6V389.2h82.6v108.4Zm255.3 462.2h-82.6v-82.6h82.6v82.6Zm0-190.1h-82.6V605.2h82.6v164.5Zm0-272.1h-82.6V389.2h82.6v108.4Zm147.4 462.2H899v-82.6h82.6v82.6Zm0-190.1H899V605.2h82.6v164.5Zm0-272.1H899V389.2h82.6v108.4Z"
          ></path>
        </svg>
        Öster
      </div>
    </div>

    <div class="col-md-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="district" on:click={() => filterVenues("Väster")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 1080 1080"
          class="w-full h-full"
          ><path
            fill="currentColor"
            d="M1080 1080V944.8L859.1 798.4h-117V1080H1080zM0 1080V944.8l220.9-146.4h117V1080H0zM536.9 829.1c-1.1-3.4-2.3-6.7-3.2-10.1-1.1-3.9-2.1-7.9-2.1-12 0-5.5 4-9.8 9.5-10.6 5.1-.7 10.2 2.8 11.5 7.9.7 2.7.3 5.3-.2 8-1 5.4-2.6 10.7-4.5 15.9-.3.7-.5 1-1.3.7-2.9-.8-5.9-.8-8.8 0-.2.1-.4.1-.9.2ZM547.8 862.2c1.1 3.5 2.3 7 3.3 10.6s1.9 7.3 1.9 11.1c.1 5.7-4.1 10.4-9.7 10.9-5.5.5-10.6-3.4-11.5-9-.5-2.8 0-5.5.7-8.2 1.3-4.9 2.9-9.8 4.3-14.7.2-.5.3-.9 1.1-.7 3.1.9 6.2.8 9.3 0h.6ZM530.7 832.9c-2.6 2.5-4.4 5.4-5.2 9.1-1.7-.3-3.4-.6-5-.9-5.1-1-10.1-2.4-14.9-4.4-3.7-1.6-6.3-4.1-7.1-8.1-.9-4.4.5-8 4-10.7 3.5-2.6 7.3-3 11.3-1 3.1 1.5 5.7 3.9 8.1 6.4 2.9 2.9 5.5 6 8.3 9 .2.1.3.3.5.6ZM559.4 842c-1.8-5.1-2-5.5-5.3-9.2.5-.6 1-1.3 1.6-2 3.6-4.3 7.5-8.4 12-11.9 2-1.6 4.2-3 6.9-3.2 5.2-.5 9.9 2.5 11.5 7.4 1.5 5-.6 10.2-5.2 12.7-4.2 2.2-8.8 3.4-13.4 4.5-2.8.7-5.4 1.2-8.1 1.7ZM525.4 849.1c.9 3.8 2.6 6.8 5.3 9.3-.5.7-1 1.3-1.6 2-3.9 4.6-8.1 9-13 12.7-4.4 3.2-9.1 3.4-13.2.7-6.3-4.2-6.2-13.6.1-17.8 2.8-1.8 5.9-2.8 9-3.7 4.5-1.2 8.9-2.1 13.4-3.2ZM554.1 858.6c1.1-1.5 2.3-2.8 3.2-4.4.9-1.5 1.4-3.2 2.2-4.9 2.5.5 5.2.9 7.8 1.6 4.1 1.2 8.2 2.4 12.2 3.9 3.6 1.4 6 4.1 6.7 8 .8 4.3-.5 8-4 10.6-3.4 2.6-7.3 3.1-11.2 1.1-2.4-1.3-4.6-3-6.5-4.8-3.4-3.3-6.6-6.9-9.8-10.3-.2-.3-.4-.6-.6-.8ZM553.1 845.6c0 6-4.7 10.8-10.7 10.8s-10.7-4.8-10.7-10.7 4.7-10.7 10.6-10.7c5.9-.1 10.8 4.6 10.8 10.6Z"
          ></path><path
            fill="currentColor"
            d="m684.7 411.7-61.9-168.1-76.1-206.8c7.3-2.7 12.4-9.6 12.4-17.8 0-10.5-8.5-19-19-19s-19 8.5-19 19c0 8.2 5.2 15.1 12.4 17.8l-76.1 206.7-61.9 168.1h-45.3V1080H730V411.7h-45.3ZM453.4 527.3c0-12.8 3.6-25.5 10.8-36.1 11.8-17.4 29.3-23.1 29.3-23.1s17.5 5.7 29.3 23.1c7.2 10.6 10.8 23.3 10.7 36.1v169.2h-80.1V527.3Zm89 378.4c-33.19 0-60.1-26.91-60.1-60.1s26.91-60.1 60.1-60.1 60.1 26.91 60.1 60.1-26.91 60.1-60.1 60.1Zm84.1-209.2h-80.1V527.3c0-12.8 3.6-25.5 10.8-36.1 11.8-17.4 29.3-23.1 29.3-23.1s17.5 5.7 29.3 23.1c7.2 10.6 10.8 23.3 10.7 36.1v169.2Z"
          ></path></svg
        >

        Väster
      </div>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="col-md-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="district" on:click={() => filterVenues("Tändsticksområdet")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 186 186"
          class="w-full h-full"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.600586 0.599854H88.2095V36.3997H0.600586V0.599854ZM99.1606 0.599854H185.401V36.3997H99.1606V0.599854ZM37.5606 50.4086H0.600586V86.2084H37.5606V50.4086ZM49.3673 50.4086H136.634V86.2084H49.3673V50.4086ZM185.401 50.4086H148.441V86.2084H185.401V50.4086ZM0.600586 99.7895H88.2095V135.589H0.600586V99.7895ZM185.401 99.7895H99.1606V135.589H185.401V99.7895ZM0.600586 149.6H37.5606V185.4H0.600586V149.6ZM136.634 149.6H49.3673V185.4H136.634V149.6ZM148.441 149.6H185.401V185.4H148.441V149.6Z"
            fill="currentColor"
          ></path></svg
        >

        Tändsticksområdet
      </div>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="col-md-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="district" on:click={() => filterVenues("Atollen")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 1080 1080"
          class="w-full h-full"
          ><path
            fill="currentColor"
            d="m0 625 461.6.1-78 86.1-100.9 111.4c3.1-2.2 6.2-4.4 9.6-6.4 21.5-13.1 43.6-16.3 62.7-18.3 54-5.6 90.8 22.1 122.6 52.8 20.4 19.7 42.5 29.2 67.5 29 25.5-.2 47.9-9.7 66.7-28.2 16.5-16.2 36.9-34.4 63.1-45.7 12-5.2 47.8-19.3 101-.7 7.9 2.8 14.9 6.8 21.6 10.9l-87.9-97-7.1-7.9-78-86.1H1080V498L596.2 94.5V0H483.9v95.1L0 499.9V625Zm596.2-398.7 342.5 286.5H596.2V226.3ZM483.9 512.8H142.1l341.8-286v286Zm112.3-335.3v-34.1l441.6 369.5H997L596.2 177.5Zm-112.3.5L83.8 512.8H43l440.9-368.9V178Z"
          ></path><path
            fill="currentColor"
            d="M1009.4 877.7c-2.7 2.5-5.4 5-8 7.4-17.3 15.7-35.9 26.5-55.7 32.5-22.1 6.7-45.7 7.5-70.7 2.2-25.1-5.4-44.8-18.8-60.9-32.6-2.8-2.4-5.5-4.8-8.1-7.2-15.2-13.9-29.5-27.1-47.1-33.8-8.7-3.3-16.9-7.4-30.7-6.9-2.6.1-23.1 0-36.9 6.8-19 9.4-35.4 22.6-49.6 36.7-1.5 1.5-3.1 2.9-4.6 4.3-26 23.7-58 36.3-92.7 36.5-34.7 0-65.7-12.1-93.2-36.5-1.8-1.6-3.5-3.2-5.3-4.9-28.7-27.7-53.3-44.2-87.5-40.7-18.2 1.9-31.9 4.5-44.2 12.1-9.9 6-18.8 14.1-28.2 22.7-3.9 3.6-7.9 7.2-12.1 10.8-2.2 1.9-4.5 3.8-6.8 5.7-36.3 28.9-77.9 37.4-123.5 25.3-31.1-8.3-53.1-28.8-72.5-46.9l-1.8-1.7C47.6 849.4 25.6 840 0 840v240h1080V841.7c-6 .5-12.4 1.4-19.2 2.6-19.4 3.6-34.9 18.1-51.4 33.4Z"
          ></path></svg
        >

        Atollen
      </div>
    </div>

    <div class="col-md-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="district" on:click={() => filterVenues("Resecentrum")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 1080 1080"
          class="w-full h-full"
          ><path
            fill="currentColor"
            d="M731.5 0v281H506.2v57.3h225.3v584.8H580.4v156.8h163.1l336.5.1V0H731.5Zm258.9 239-54 39.2h-66.7l-54-39.2-20.6-63.5 20.6-63.5 54-39.2h66.7l54 39.2 20.7 63.5-20.7 63.5Z"
          ></path><path
            fill="currentColor"
            d="M912.1 130.7h-17.3v52.4l-37.4 14.1 6.1 16.2 48.6-18.3-.1-.2h.1v-64.2zM488 390.2H69.9c-38.6 0-69.9 31.3-69.9 70v514.3c0 24 19.5 43.5 43.5 43.5h92.3l-62.1 62 85.2-.1 61.6-62h117l61.6 62 85.2.1-62.1-62.1h92.3c24 0 43.5-19.5 43.5-43.5V460.2c0-38.7-31.4-70-70-70ZM139.5 913c-19.1-.2-34.8-16.1-34.7-35 .1-19.1 15.9-34.7 34.9-34.7 19.1.1 34.7 15.7 34.7 34.9s-16.1 35-34.9 34.8Zm278.5-.1c-19.1-.3-34.6-16-34.5-35.1.1-19.1 16-34.6 35-34.5 19 .2 34.7 16 34.6 35-.1 18.8-16.5 34.9-35.1 34.6ZM453.3 708H104.6V522h348.7v186Z"
          ></path></svg
        >

        Resecentrum
      </div>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="col-md-1">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
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
      <div class="container">
        <div class="row">
          {#each venues as venue}
            {#if venue.district === selectedDistrict}
              <div class="col-sm">
                <a
                  href={`https://${venue.url}`}
                  target="_blank"
                  class="no-decoration"
                >
                  <p class="venuestyle">{venue.name}</p>
                </a>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

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
  .district {
    min-width: 200px;
    min-height: 200px;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    /* background-color: red; */
  }
  .container {
    display: flex;
    flex-direction: row;
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
  #url a {
    color: inherit;
    text-decoration: none;
  }
  .venuestyle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
  }
</style>
