import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/moviesAPI";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const data = await getMovieCast(movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);

        // setIsError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul className={s.list}>
        {casts.map((cast) => (
          <li key={cast.id} className={s.info}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.name}
              className={s.image}
            />
            <h2 className={s.name}>{cast.name}</h2>
            <p className={s.character}>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
