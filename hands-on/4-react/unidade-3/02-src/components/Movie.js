import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie } from "../store/actions/movies";

export const Movie = ({movie}) => {
    const dispatch = useDispatch();
    return (
        <div className="movie-item">
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
            </div>
            <div className="movie-excerpt">
                <h3>{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">Ver detalhes</Link>
                <button class="btn btn-secondary" onclick={() => dispatch(addMovie(movie))}>Adicionar aos favoritos</button>
            </div>
        </div>
    );
};