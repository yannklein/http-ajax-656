// //////////////////////
// Rehearsal
// //////////////////////

// 1. Select the button
// const button = document.querySelector("#click-me");

// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, innerText, class disabled
//   // event.currentTarget.classList.add("disabled");
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Loading...";
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select the input, button, list
const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on the button
search.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  // 2.5 Fetch the OMDBAPI
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    const movies = data.Search;
    // 3. Change the DOM, display the movies
    results.innerHTML = "";
    movies.forEach((movie) => {
      results.insertAdjacentHTML(
        "beforeend", 
        `<li class='list-inline-item'>
          <img src="${movie.Poster}" alt="poster" />
          <p>${movie.Title}</p>
        </li>`);
    });
  });
});




// //////////////////////
// HTTP POST request
// //////////////////////
const searchAlgoliaPlaces = (event) => {
  const someData = {query: event.currentTarget.value};
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify(someData)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", searchAlgoliaPlaces);