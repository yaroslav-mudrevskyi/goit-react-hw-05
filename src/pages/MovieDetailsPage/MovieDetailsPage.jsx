import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../../services/moviesAPI";
// import Loader from "../../components/Loader/Loader";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);

        // setIsError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (!movie) return;

  return (
    <div>
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={s.image}
        />
        <div className={s.details}>
          <h1>{movie.title}</h1>
          <p>{`User Score: ${movie.vote_average.toFixed(1)}`}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <hr />
      <div className={s.info}>
        <h3>Additional information</h3>
        <ul className={s.list}>
          <li>
            <NavLink className={s.link} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={s.link} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
      <hr />
    </div>
  );
};

export default MovieDetailsPage;
