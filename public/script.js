// form show + hide
const popup = document.getElementById("popup");
const showButton = document.getElementById("showElement");
const hideButton = document.getElementById("hideElement");

function showElement() {
  popup.classList.remove("hidden");
}

function hideElement() {
  popup.classList.add("hidden");
}

// Attach event listeners
showButton.addEventListener("click", showElement);
hideButton.addEventListener("click", hideElement);

// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("mForm");
const movielist = document.getElementById("movielist");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(form.elements.mTitle.value)

    addMovie(
        form.elements.mTitle.value,
        form.elements.mDuration.value,
        form.elements.mGenre.value,
        form.elements.mWatched.value,
        form.elements.mEmotion.value,
        form.elements.mNotes.value,
    )
    console.log(movieList)
})


function showMovies(movie) {
    let item = document.createElement("li");
    item.setAttribute("data-id", movie.id);
    item.innerHTML = `<p id="title"><strong>${movie.title}</strong><br>${movie.duration}</p>`;
    item.addEventListener("click", function(){
      item.classList.toggle("done");
    })

    movielist.appendChild(item);

    // Clear the value of the input once the movie has been added to the page
    form.reset();

    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every movie

    // Listen for when the delete button is clicked
    delButton.addEventListener("click", function (event) {

        movieList.forEach(function (movieArrayElement, movieArrayIndex) {
            if (movieArrayElement.id == item.getAttribute('data-id')) {
                movieList.splice(movieArrayIndex, 1)
            }
        })

        // Make sure the deletion worked by logging out the whole array
        console.log(movieList)

        item.remove(); // Remove the movie item from the page when button clicked

    })

    item.addEventListener("click", function(){
      item.classList.remove("hidden")
    })

}


// Create an array called 'movieList'
var movieList = [];

// Create a function called 'addMovie'
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the movieList array

function addMovie(title, duration, genre, status, emotion, notes) {
    // Creating the object, directly passing in the input parameters
    let movie = {
        title,
        duration,
        id: Date.now(),
        date: new Date().toISOString(),
        genre,
        status,
        emotion,
        notes
    }

    movieList.push(movie);
    showMovies(movie);

}

// Call the function with test values for the input paramaters
//////// REMOVE AT THE END.
addMovie("Initial Sketches", "Concept Ideation", 50, 5, "Google");

// Log the array to the console.
console.log(movieList);
