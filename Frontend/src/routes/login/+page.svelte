<script>
  let username = "";
  let password = "";
  let loginStatus = "";
  const login = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.text();
        loginStatus = data;

        if (data === "Login success") {
          // Redirect to '/edit'
          window.location.href = "/edit";
        }
      } else {
        const error = await response.text();
        loginStatus = error;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
</script>

<form on:submit|preventDefault={login}>
  <label>
    Username:
    <input type="text" bind:value={username} />
  </label>

  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>

  <button type="submit">Login</button>
  {#if loginStatus}
    <p>{loginStatus}</p>
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
</style>
