import './styles.scss';
import MovieCard from '../../component/MovieCard';
import { Movie } from 'types/movie';

const Catalog = () => {
  const movie: Movie = {
    id: 3,
    title: 'Casablanca',
    director: 'Michael Curtiz',
    year: 1942,
    imgUrl:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/pQjUifS7GXimKOtRwPf8nXWw1bd.jpg',
    synopsis:
      'In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.',
    genreId: 3,
    reviews: [
      {
        id: 3,
        text: 'Melhor que esse não tem!',
        movieId: 3,
        user: {
          id: 1,
          name: 'Ana',
          email: 'ana@gmail.com',
        },
      },
    ],
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
