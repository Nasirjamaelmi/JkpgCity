<script>
</script>

<h1>Welcome to saeee</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<svelte:head>
  <title>Välkommen till Jönköping</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</svelte:head>

<!-- Jumbotron -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Välkommen till ditt JÖNKÖPING</h1>
  </div>
</div>

<!-- 3-Grid with Pictures and Paragraphs -->
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="grid-item">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Image 1"
          class="img-fluid grid-img"
        />
        <p>Paragraph 1</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="grid-item">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Image 2"
          class="img-fluid grid-img"
        />
        <p>Paragraph 2</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="grid-item">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Image 3"
          class="img-fluid grid-img"
        />
        <p>Paragraph 3</p>
      </div>
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

  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
</style>
