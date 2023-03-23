import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/GetMovies';
import defaultImage from '../../Images/No_Image_Available.jpg';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const castFetch = async () => {
      try {
        const { cast } = await getMovieCredits(moviesId);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    };
    castFetch();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {credits.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            {profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="150"
              ></img>
            ) : (
              <div>
                <img src={defaultImage} alt={name} width="150"></img>
                <p>Sorry,there is no photo for this cast!</p>
              </div>
            )}

            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
