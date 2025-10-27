// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

// Fetch a random Dad Joke from an API
async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {
        const jokeDisplay = document.getElementById("joke-display");
        if (!jokeDisplay) {
            console.error("Element with ID 'joke-display' not found.");
            return;
        }
        jokeDisplay.textContent = "Loading joke...";
        const joke = await getRandomJoke();
        jokeDisplay.textContent = joke;
    });
});
function isStrongPassword(password) 
{
    
    if (password.length < 8) 
        {
        return false;
        }
    if (password.toLowerCase().includes("password")) 
        {
        return false;
        }
    if (!/[A-Z]/.test(password)) 
        {
        return false;
        }


    return true;
}


document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");

    if (!loginButton) {
        console.warn("Login button not found — skipping password check setup.");
        return;
    }

    loginButton.addEventListener("click", function() {
        const passwordInput = document.getElementById("password");
        if (!passwordInput) {
            alert("Password input not found!");
            return;
        }

        const password = passwordInput.value.trim();

        if (isStrongPassword(password)) {
            alert("Password is strong");
        } else {
            alert("Password is weak");
        }
    });
});
