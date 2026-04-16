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
  {
    id: 6,
    title: "The Hangover",
    genre: "comedy",
    year: "2009",
    duration: "1.40",
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: "2013",
    duration: "1.52",
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "science-fiction",
    year: "2014",
    duration: "2.55",
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "science-fiction",
    year: "1999",
    duration: "3.02",
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "drama",
    year: "1994",
    duration: "2.34",
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0133093/",
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
      <ul>
         <li><p>${item.genre}</p></li>
         <li><p>${item.year}</p></li>
         <li><p>${item.duration}</p></li>
      </ul>
      <figure>
         <a href="${item.url}" target="_blank" rel="bb"><img src="${item.img}" alt="${item.title}"></a>
         <figcaption>${item.title}</figcaption>
      </figure>   
   </article>
   `;
  });
}

//opgave 6:Tøm containeren før filmene vises , Inde i funktionen displayMovies(movieList) skal du sætte variablen moviesContainer til en tom tekst-streng ved at bruge innerHTML

// opgave 7:Brug forEach() til at gennemløbe filmene

// opgave 8: Brug innerHTML og template literals

//opgave 19: Kald funktionen med filmdata

displayMovies(movies);

//Opgave 10: Tilføj billede og link

//opgave 11: Tilføj de næste 5 film fra movies.txt title
