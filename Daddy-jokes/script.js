const jokeElement = document.getElementById('joke');

async function generateJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        jokeElement.textContent = data.joke;
    } catch (error) {
        jokeElement.textContent = 'Oops! Failed to fetch a joke. Try again!';
        console.error('Error fetching joke:', error);
    }
}

// Generate the first joke when the page loads
generateJoke();
