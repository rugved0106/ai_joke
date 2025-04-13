const btn = document.getElementById("jokeBtn");
    const jokeText = document.getElementById("joke");

    btn.addEventListener("click", async () => {
      jokeText.innerHTML = "⏳ Loading a joke...";
      try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        jokeText.innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`;
      } catch (error) {
        jokeText.innerHTML = "❌ Couldn't load a joke. Try again later!";
      }
    });