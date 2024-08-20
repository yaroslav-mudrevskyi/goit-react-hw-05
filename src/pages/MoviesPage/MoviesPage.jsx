import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../services/moviesAPI";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchMovie(query);
        setMovies(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

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
          placeholder="Enter the name of the movie..."
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title={`Something went wrong. Please, try again later! ${isError}`}
        />
      )}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
