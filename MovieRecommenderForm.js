
const url = "http://localhost:8080/chat"; // Update the URL to match your backend endpoint

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather data from the form elements
        const selectedGenres = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(checkbox => checkbox.value);
        const moviesAndActors = document.getElementById('multi-line-input').value;
        const requestValue = `Genres: ${selectedGenres.join(', ')}; Movies & Actors: ${moviesAndActors}`;

        // Create a JavaScript object with just the requestValue
        const request = {
            requestValue: requestValue
        };

        console.log(request);

        // Convert the JavaScript object to JSON
        const jsonData = JSON.stringify(request);

        // Send the JSON data to your backend using fetch
        const response = await fetch(url + "/" + jsonData, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const answerBox = document.getElementById("answerBox")
        const movieRecommendation = JSON.stringify(response);
        console.log(JSON.stringify(movieRecommendation))
        answerBox.textContent = movieRecommendation.message.content;

    });
});



