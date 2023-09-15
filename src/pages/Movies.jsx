import Card from '../components/Card';
import Loading from '../components/Loading';
import useFetchMovies from '../hooks/useFetchMovies';

const Movies = () => {
  const { loading, movies } = useFetchMovies();
  return (
    <div className='p-14'>
      {loading ? <Loading /> : null}
      {!loading ? <FeaturedMovies movies={movies} /> : null}
    </div>
  );
};

const FeaturedMovies = ({ movies }) => {
  return (
    <div className='w-full container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {Array.isArray(movies) &&
        movies.length > 0 &&
        movies
          .slice(0, 10)
          .map((movie) => <Card movie={movie} key={movie.id} />)}
    </div>
  );
};

export default Movies;
