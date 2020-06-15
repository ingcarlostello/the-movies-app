import React, {useContext} from 'react';
import '../scss/MovieItem.scss';
import { MovieContext } from '../context/MovieContext';

const MovieItem = ({movieName, releaseDate, id}) => {  
    
    
    const { filterCards, deleteMovie } = useContext(MovieContext);
  

    return (
        <div>
            <div className="card" onClick={() => filterCards(id)}>
                <div className="card-body">
                    <h5 className="card-title">{movieName}</h5>
                    <p className="card-text">Release Date: {releaseDate}</p>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => deleteMovie(id)}>Delete</button>
            </div>
        </div>
    );
};

export default MovieItem;