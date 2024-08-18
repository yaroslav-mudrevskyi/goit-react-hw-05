import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./Homepage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Trending today</h1>
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

export default HomePage;
