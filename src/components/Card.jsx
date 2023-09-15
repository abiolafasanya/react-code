import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  const imageUrl = movie?.poster_path
    ? movie.poster_path
    : movie.backdrop_path
    ? movie.backdrop_path
    : '';
  const posterBaseUrl = `https://image.tmdb.org/t/p/w1280/${imageUrl}`;
  return (
    <Link to={`/${movie.id}`}>
      <article className='w-full'>
        <img
          src={`${posterBaseUrl}`}
          alt={movie.title ? movie.title : 'movie image'}
        />
        <h4>{movie.title}</h4>
        <span>{movie.realease_date}</span>
      </article>
    </Link>
  );
};

export default Card;
