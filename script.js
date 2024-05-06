// Get the element with the id 'container' from the HTML document
const container = document.getElementById('container');

// Get the elements with the ids 'register' and 'login' from the HTML document
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Add an event listener to the 'register' button
registerBtn.addEventListener('click', () => {
    // When the 'register' button is clicked, add the CSS class 'active' to the container element
    container.classList.add("active");
});

// Add an event listener to the 'login' button
loginBtn.addEventListener('click', () => {
    // When the 'login' button is clicked, remove the CSS class 'active' from the container element
    container.classList.remove("active");
});
