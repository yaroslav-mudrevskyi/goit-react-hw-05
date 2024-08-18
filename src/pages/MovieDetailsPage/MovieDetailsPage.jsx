import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/moviesAPI";
// import Loader from "../../components/Loader/Loader";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
        console.log(data);
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
  console.log(movie.backdrop_path);

  if (!movie) return;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetailsPage;
