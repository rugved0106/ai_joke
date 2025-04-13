It grabs the joke button and joke output area using getElementById.

Adds a click event listener on the button.

On click:

Shows "⏳ Loading a joke..." as a placeholder.

Fetches a random joke from the Official Joke API.

Converts the response to JSON.

Updates the DOM with the setup and punchline of the joke.

If something goes wrong (e.g. no internet), it shows an error message.

