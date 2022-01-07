import MovieImg from 'assets/images/movie.png';
import './styles.scss';

const MovieCard = () => {
    return (
        <div className='base-card movie-card'>
            <div className='card-top-container'>
                <img src={MovieImg} alt="Nome do filme" />
            </div>
            <div className='card-bottom-container'>
                <h6>O Retorno do Rei</h6>
                <h5>2013</h5>
                <p>O olho do inimigo está se movendo</p>
            </div>
        </div>
    );
}

export default MovieCard