import "./App.css";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>React App</h1>
        <form>
          <input type="text" placeholder="Avengers, matrix..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li className="movie" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  );
}

export default App;
