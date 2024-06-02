import { useEffect, useState } from "react";
const KEY = "17caf40b";

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setError(""); //every time before fetch the data we have to reset the error to ""
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}
          `,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("something went wrong💣💣💣");
        const data = await res.json();
        if (data.Response === "False")
          throw new Error(`Movie not found💣💣💣😮`);
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovieDetails();
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);
  return { error, isLoading, movies };
}
