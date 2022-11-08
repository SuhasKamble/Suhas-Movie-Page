const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2328db40b00aafc9dc992e20b7cfe4f6";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=2328db40b00aafc9dc992e20b7cfe4f6&query=";

const movies = document.getElementById("movies");
const form = document.querySelector("form");
const search = document.querySelector(".search");

const searchMovies = async (url) => {
  movies.innerHTML = "";
  const api = await fetch(url);
  const res = await api.json();
  console.log(res);
  let html = "";
  res.results.forEach((movie) => {
    html += ` <div class="card">
    <img src=${IMG_PATH + movie.poster_path} alt="">
    <h4>${movie.title}</h4>
    <p>${movie.release_date}</p>
</div>`;
    movies.innerHTML = html;
  });
};

// searchMovies(SEARCHAPI + "/iron-man");
searchMovies(APILINK);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search.value === "") {
    alert("Please enter the movie name");
    return;
  }
  searchMovies(SEARCHAPI + search.value);
});

setTimeout(() => {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      let text = card.querySelector("h4").innerText;
      location.href = `https://www.themoviedb.org/search?query=${text}`;
    });
  });
}, 3000);
