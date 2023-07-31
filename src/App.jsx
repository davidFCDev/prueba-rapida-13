import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, updateSearch } = useSearch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
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
