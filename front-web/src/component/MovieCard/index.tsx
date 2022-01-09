import { Movie } from '../../types/movie'
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className='base-card movie-card'>
            <div className='card-top-container'>
                <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className='card-bottom-container'>
                <h6>{movie.title}</h6>
                <h5>{movie.year}</h5>
                <p>{movie.synopsis}</p>
            </div>
        </div>
    );
}

export default MovieCard