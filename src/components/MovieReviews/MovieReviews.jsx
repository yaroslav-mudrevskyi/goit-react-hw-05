import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/moviesAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviews.length && !isLoading) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <div>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li key={review.id} className={s.item}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
