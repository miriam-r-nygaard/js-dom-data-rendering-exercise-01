"use strict";
//Opgave 2: skriv "use strict";

//Opgave 3: Her er et langt array med de første fem film
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "science-fiction",
    year: "2010",
    duration: "2.28",
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Dark Night",
    genre: "action",
    year: "2008",
    duration: "2.32",
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "drama",
    year: "1994",
    duration: "2.22",
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "comedy",
    year: "2007",
    duration: "1.53",
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    title: "It",
    genre: "horror",
    year: "2017",
    duration: "2.15",
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
];

//Opgave 4: Opret en konstant variabel med navnet - moviesContainer, Variablen skal pege på elementet med id - movies-container, Hint: Brug document.querySelector().

const moviesContainer = document.querySelector("#movies-container");

//opgave 5: Opret funktionen displayMovies(movieList)
function displayMovies(movieList) {
  moviesContainer.innerHTML += "";
  movies.forEach((item) => {
    moviesContainer.innerHTML += `
   <article>
   <h2>${item.title}</h2>
   <h3>${item.genre}</h3>
   <p>${item.year}</p>
   </article>
   `;
  });
}

displayMovies(movies);
