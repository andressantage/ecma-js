const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');
const apiKey = 'b111cc35';

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  searchMovies(searchTerm);
});

async function searchMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
  const data = await response.json();
  if (data.Response === 'True') {
    displayMovies(data.Search);
  } else {
    movieList.innerHTML = '<p>No se encontraron películas</p>';
  }
}

function displayMovies(movies) {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie');

    const moviePoster = movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450' : movie.Poster;
    const movieTitle = movie.Title;
    const movieYear = movie.Year;

    movieItem.innerHTML = `
      <img src="${moviePoster}" alt="${movieTitle}">
      <div class="movie-info">
        <h3>${movieTitle}</h3>
        <p>${movieYear}</p>
      </div>
    `;

    movieList.appendChild(movieItem);
  });
}