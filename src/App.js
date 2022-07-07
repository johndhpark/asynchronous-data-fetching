import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const memoizedFetchMovies = useCallback(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "https://react-http-3b880-default-rtdb.firebaseio.com/movies.json"
        );

        if (!res.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await res.json();
        const keys = Object.keys(data);

        const loadedMovies = [];

        keys.forEach((key) => {
          loadedMovies.push({
            id: key,
            ...data[key],
          });
        });

        setMovies(loadedMovies);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  useEffect(memoizedFetchMovies, [memoizedFetchMovies]);

  const btnClickHandler = () => {
    memoizedFetchMovies();
  };

  const addMovieHandler = async (movie) => {
    // console.log("added");
    await fetch(
      "https://react-http-3b880-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  let content = <p>Found no movies</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  } else if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section>
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
        </section>
        <button onClick={btnClickHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
