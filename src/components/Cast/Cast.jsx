import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/GetMovies';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const castFetch = async () => {
      try {
        const { cast } = await getMovieCredits(moviesId);
        setCredits(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    };
    castFetch();
  }, [moviesId]);
  console.log(credits);

  return (
    <div>
      <ul>
        {credits.map(({ id, name, profile_path, character }) => (
          //     const image = `https://image.tmdb.org/t/p/w500/${profile_path}`;
          //   const noImage = '/src/Images/No_Image_Available.jpg';
          <li key={id}>
            {profile_path !== null ? (
              <img src="{image}" alt="{name}" width="150"></img>
            ) : (
              <img src="{noImage}" alt="{name}"></img>
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
