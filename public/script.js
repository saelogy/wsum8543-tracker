// Create an array called 'movieList'
const movieList = [];

function onLoad() {
  localStorage.getItem('movies');
  //localStorage.clear();
}

//console.log(localStorage.getItem('movies'))

// form show + hide
const popup = document.getElementById("popup");
const showButton = document.getElementById("openForm");
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

  //console.log(movieList);
  localStorage.setItem('movies', JSON.stringify(movieList));

})

function showMovies() {

  let movies = JSON.parse(localStorage.getItem('movies'));

  console.log(movies);

  if (movies !== null) {
    console.log(movies)
    movies.forEach(function(movie) {

      let item = document.createElement("li");
      item.setAttribute("data-id", movie.id);

      // object values: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
      if (Object.values(movie).includes("y")) {
        item.innerHTML = `<div class="item"><span class="dot" id="y"></span><p id="title"><strong>${movie.title}</strong></p><br></div>`;
      } else {
        item.innerHTML = `<div class="item"><span class="dot" id="n"></span><p id="title"><strong>${movie.title}</strong></p><br></div>`;
      }

      // check for emotional rating +display as image
      let imgEmotion = document.createElement('img');
      imgEmotion.setAttribute('id', 'imgEmotion');
      if (Object.values(movie).includes("joy")) {
        // img cred. https://www.flaticon.com/authors/freepik
        imgEmotion.src = 'https://i.imgur.com/KvWgmWD.png';
      } else if (Object.values(movie).includes("sadness")) {
        // img cred. https://www.flaticon.com/authors/freepik
        imgEmotion.src = 'https://i.imgur.com/iD7c0oh.png';
      } else if (Object.values(movie).includes("fear")) {
        // img cred. 
        imgEmotion.src = 'https://i.imgur.com/rVoazbt.png';
      } else if (Object.values(movie).includes("disgust")) {
        // img cred. https://www.flaticon.com/authors/those-icons
        imgEmotion.src = 'https://i.imgur.com/oL0BxtZ.png';
      } else if (Object.values(movie).includes("anger")) {
        // img cred. https://www.flaticon.com/authors/joalfa
        imgEmotion.src = 'https://i.imgur.com/w7ckg2v.png';
      }

      item.appendChild(imgEmotion);

      // check for genre + display as image
      let imgGenre = document.createElement('img');
      imgGenre.setAttribute('id', 'imgGenre');
      // all following img cred. https://www.flaticon.com/authors/freepik
      if (Object.values(movie).includes("action")) {
        imgGenre.src = 'https://i.imgur.com/KxMQ9oa.png';
      } else if (Object.values(movie).includes("comedy")) {
        imgGenre.src = 'https://i.imgur.com/LSCudQs.png';
      } else if (Object.values(movie).includes("drama")) {
        imgGenre.src = 'https://i.imgur.com/U5oMqty.png';
      } else if (Object.values(movie).includes("fantasy")) {
        imgGenre.src = 'https://i.imgur.com/6SineeK.png';
      } else if (Object.values(movie).includes("horror")) {
        imgGenre.src = 'https://i.imgur.com/scaknLP.png';
      } else if (Object.values(movie).includes("romance")) {
        imgGenre.src = 'https://i.imgur.com/9S0maUr.png';
      }

      item.appendChild(imgGenre);

      movielist.appendChild(item);

      // Clear the value of the input once the movie has been added to the page
      form.reset();

      // Setup delete button DOM elements
      let delButton = document.createElement('img');
      delButton.setAttribute('id', 'delBtn');
      // img cred. https://www.flaticon.com/authors/freepik
      delButton.src = 'https://i.imgur.com/kkd7kac.png';
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
        document.getElementById("notepopup").innerHTML = `<div id="noscroll"><em><h3>NOTE</h3><p ="date">added on ${movie.date}</p><p id="duration">length ${movie.duration}</p></em></div><br><p id="notes">${movie.notes}</p><br><p id="esc">press esc to close</p>`;
      })
    })
  }
}

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
  showMovies();

}

// Call the function with test values for the input paramaters


//console.log(movieList);