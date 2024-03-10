<script>
  /**
   * @type {any}
   */
  export let venue;

  let editedVenue = { ...venue };
  let formVisible = true;
  async function handleSubmit() {
    try {
      const loading = true;
      formVisible = false;
      // Add your logic to update the venue in the database
      console.log("Updating venue:", editedVenue);

      const response = await fetch(
        `http://localhost:3000/api/venues/${editedVenue.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedVenue),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update venue: ${response.statusText}`);
      }

      console.log("Venue updated successfully");
    } catch (err) {
      console.error("Error updating venue:", err);
      err = "An error occurred while updating the venue.";
    } finally {
      const loading = false;
    }
  }

  $: if (!formVisible) {
    // Reset the editedVenue object when the form is hidden
    editedVenue = { ...venue };
  }
</script>

{#if formVisible}
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Venue Name:
      <input bind:value={editedVenue.name} />
    </label>

    <label>
      Venue URL:
      <input bind:value={editedVenue.url} />
    </label>

    <label>
      Venue District:
      <input bind:value={editedVenue.district} />
    </label>

    <button type="submit">Save Changes</button>
  </form>
{/if}

<style>
  form {
    max-width: 300px;
    margin: auto;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 5px;
    margin-top: 3px;
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
  }
</style>
