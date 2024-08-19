import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../services/moviesAPI";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    // if (!query) return;

    const fetchData = async () => {
      try {
        // setLoading(true);
        const data = await getSearchMovie(query);

        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [query]);

  // const handleSubmit = (query) => {
  //   searchParams.set({ query });
  //   setSearchParams(searchParams);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value.trim() });

    form.reset();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          autoComplete="off"
          type="text"
          defaultValue={query}
          name="query"
          placeholder="Enter movie name..."
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>

      {/* <MovieList movies={movies} /> */}
    </div>
  );
};

export default MoviesPage;
