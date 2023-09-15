import { useParams } from 'react-router-dom';
import useFetchMovie from '../hooks/useFetchMovie';
import { Fragment } from 'react';
import Loading from '../components/Loading';

const Movie = () => {
  const { id } = useParams();
  const { loading, movie } = useFetchMovie(id);
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const selectedImage = movie.videos;
  const video = selectedImage?.results[0];

  return (
    <Fragment>
      {loading ? <Loading /> : null}
      {!loading ? (
        <div className='container mx-auto p-14' data-testid=''>
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            className=''
            frameborder='0'
            marginheight='0px'
            marginwidth='0px'
            height='400px'
            width='100%'
            allowfullscreen
          ></iframe>
         <div className="my-5 flex gap-2">
         <h3>{movie.title}</h3>
          <span>{movie.release_date}</span>
         </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Movie;
