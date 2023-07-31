import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch } = useSearch();
  const { movies, getMovies, loading, error } = useMovies({
    search,
    sort,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>React App</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="query"
            value={search}
            type="text"
            placeholder="Avengers, matrix..."
          />
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
