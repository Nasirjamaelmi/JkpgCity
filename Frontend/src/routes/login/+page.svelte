<script>
  // @ts-ignore
  import { onMount } from "svelte";
  // @ts-ignore
  import { goto } from "$app/navigation";
  // @ts-ignore
  import bcrypt from "bcryptjs"; // Import bcrypt for password comparison

  let username = "";
  let password = "";
  let errorMessage = "";

  onMount(() => {
    // You might want to include logic here to check if the user is already logged in and redirect if necessary.
  });

  function handleLogin() {
    if (username && password) {
      // Assuming you have an API endpoint on the server to handle authentication
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ un: username, pw: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Use bcrypt.compare to check the hashed password on the client side
            bcrypt.compare(
              password,
              data.hashedPassword,
              (/** @type {any} */ bcryptError, /** @type {any} */ result) => {
                if (bcryptError) {
                  console.log("Bcrypt error: ", bcryptError);
                  errorMessage = "An unexpected error occurred.";
                } else if (result) {
                  errorMessage = "";
                  console.log("Login successful!");
                  // Redirect to the dashboard or another page
                  goto("/dashboard");
                } else {
                  errorMessage = "Incorrect password.";
                }
              }
            );
          } else {
            errorMessage = data.message || "Login failed.";
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          errorMessage = "An unexpected error occurred.";
        });
    } else {
      errorMessage = "Please enter both username and password.";
    }
  }
</script>

<form on:submit|preventDefault={handleLogin}>
  <label>
    Username:
    <input type="text" bind:value={username} />
  </label>

  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>

  <button type="submit">Login</button>

  {#if errorMessage}
    <p class="error-message">{errorMessage}</p>
  {/if}
</form>

<style>
  /* Add your styling here */
  form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>
