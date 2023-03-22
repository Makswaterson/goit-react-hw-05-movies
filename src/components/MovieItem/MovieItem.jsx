import { Link, useLocation } from 'react-router-dom';

const MovieInfo = ({
  movie: {
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    genres = [],
  },
}) => {
  const location = useLocation();
  const noImage = '/src/Images/No_Image_Available.jpg';
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div>
      <Link>
        <button type="button">Return</button>
      </Link>

      <div>
        <img src={image} alt={title} width="200px" />
      </div>
      <section>
        <h2>
          {title}
          {release_date}
        </h2>
        <span>User score:{Math.round(vote_average * 10)}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </section>
    </div>
  );
};
export default MovieInfo;
