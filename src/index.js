// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select the button 
// const button = document.querySelector("#click-me");

// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM, add disabled and new content
//   event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Loading...";
// });

// //////////////////////
// HTTP GET request
// //////////////////////


// 1. Select elements (ul, search button, input)
const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  event.preventDefault();
  const url = `http://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`
  // console.log(event);
  // 2.5 Fetch the OMDB API
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search);
      // 3. Display the movies
      results.innerHTML = "";
      data.Search.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="poster" />
            <p>${movie.Title}</p>
          </li>`);
      });
    })
});


// //////////////////////
// HTTP POST request
// //////////////////////

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const search = document.querySelector("#search");
search.addEventListener("keyup", searchAlgoliaPlaces);