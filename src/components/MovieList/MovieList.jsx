import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id.toString()}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
