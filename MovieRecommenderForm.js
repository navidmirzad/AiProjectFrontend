
const url = "http://localhost:8080/chat"; // Update the URL to match your backend endpoint

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");



    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather data from the form elements
        const selectedGenres = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(checkbox => checkbox.value);
        const moviesAndActors = document.getElementById('multi-line-input').value;
        const requestValue = `Movies & Actors: ${moviesAndActors} Genres: ${selectedGenres.join(', ')}`;

        // Create a JavaScript object with just the requestValue
        const request = {
            selectedGenres: selectedGenres,
            moviesAndActors: moviesAndActors,
            requestValue: requestValue
        };

        console.log(request.requestValue)


        const response = await fetch(url + "/" + request.requestValue)
        const data = await response.json()
        document.getElementById("answerBox").value = data[0].message.content


    });
});






