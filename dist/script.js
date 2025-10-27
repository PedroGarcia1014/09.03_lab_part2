// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
  alert("Hello, world from javascript!");
}

document.addEventListener("DOMContentLoaded", function() {
  let helloButton = document.getElementById("hello-link");
  if (helloButton) {
    helloButton.addEventListener("click", function() {
      sayHello();
    });
  }

  let jokeButton = document.getElementById("joke-button");
  if (jokeButton) {
    jokeButton.addEventListener("click", function() {
      getJoke();
    });
  }

  let loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", checkPassword);
  }
});

async function getJoke() {
  let jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.textContent = "Loading joke...";
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { "Accept": "text/plain" }
    });
    let text = await response.text();
    jokeDisplay.textContent = text;
  } catch (error) {
    jokeDisplay.textContent = "Could not get a joke.";
  }
}

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  } else if (password.toLowerCase().includes("password")) {
    return false;
  } else if (!/[A-Z]/.test(password)) {
    return false;
  } else {
    return true;
  }
}

function checkPassword() {
  let passwordInput = document.getElementById("password");
  let password = passwordInput.value;

  if (isStrongPassword(password)) {
    alert("Password is strong");
  } else {
    alert("Password is weak");
  }
}
