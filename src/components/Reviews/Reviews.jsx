import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/GetMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const reviewsFetch = async () => {
      try {
        const { results } = await getMovieReviews(moviesId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    reviewsFetch();
  }, [moviesId]);

  return reviews.length === 0 ? (
    <h3>We don`t have any reviews for this movie!</h3>
  ) : (
    <ul>
      {reviews.map(({ id, author, updated_at, content }) => (
        <li key={id}>
          <h3>{author}:</h3>
          <h4>{new Date(updated_at).toLocaleDateString()}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
