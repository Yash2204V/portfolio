window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.innerHTML = ""; // Clear the body
        window.location.href = 'home.html'; // Redirect to home.html
    }, 3000); // Reduced timeout to 1 second
});
