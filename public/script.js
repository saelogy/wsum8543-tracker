// Create an array called 'movieList'
var movieList = [];

// form show + hide
const popup = document.getElementById("popup");
const showButton = document.getElementById("openForm");
const hideButton = document.getElementById("hideElement");
const notepopup = document.getElementById('notepopup');

// Attach event listeners
showButton.addEventListener("click", function () {
  popup.showModal();
});

// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("mForm");
const movielist = document.getElementById("movielist");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addMovie(
    form.elements.mTitle.value,
    form.elements.mDuration.value,
    form.elements.mGenre.value,
    form.elements.complete.value,
    form.elements.mEmotion.value,
    form.elements.mNotes.value,
  )

  console.log(movieList)
})

function showMovies(movie) {
  let item = document.createElement("li");
  item.setAttribute("data-id", movie.id);

  // object values: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  if (Object.values(movie).includes("y")) {
    item.innerHTML = `<div class="item"><span class="dot" id="y"></span><p id="title"><strong>${movie.title}</strong></p><br></div`;
  } else {
    item.innerHTML = `<div class="item"><span class="dot" id="n"></span><p id="title"><strong>${movie.title}</strong></p><br></div>`;
  } 

  movielist.appendChild(item);

  // Clear the value of the input once the movie has been added to the page
  form.reset();

  // Setup delete button DOM elements
  let delButton = document.createElement('img');
  delButton.setAttribute('id','delBtn')
  delButton.src = 'https://i.imgur.com/kkd7kac.png';
  /*let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");*/
  //delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every movie

  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function () {

    movieList.forEach(function (movieArrayElement, movieArrayIndex) {
      if (movieArrayElement.id == item.getAttribute('data-id')) {
        movieList.splice(movieArrayIndex, 1)
      }
    })

    item.remove(); // Remove the movie item from the page when button clicked

  })

  // item list popup: https://stackoverflow.com/questions/61169448/click-on-the-list-item-it-toggles-the-line-through-sytle-class-on-and-off
  item.addEventListener("click", function () {
    notepopup.showModal();
    document.getElementById("notepopup").innerHTML = `<div id="noscroll"><em><h3>NOTE</h3><p ="date">added on ${movie.date}</p><p id="duration">length ${movie.duration}</p></em></div><br><p id="notes">${movie.notes}</p>`;
  })

}

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
    // date format location code: https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format
    date: new Date().toLocaleDateString('tr-TR', { day: "numeric", year: "numeric", month: "short" }),
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
addMovie("a silent voice", "2:25", "romance", "y", "sadness", "made me cry 10/10 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
addMovie("evangelion", "2:25", "scifi", "n", "sadness", "made me cry 10/10");


// Log the array to the console.
console.log(movieList);