import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../scss/MovieItem.scss';


const MovieItem = ({ movieName, releaseDate, id }) => {

    const { filterCards, deleteMovie } = useContext(MovieContext);

    return (
        <div className="wrapper-card">
            <div className="card">
                <span className="wrapper-delete" >
                    <i className="far fa-trash-alt" onClick={() => deleteMovie(id)}></i>
                </span>
                <div className="card-body" onClick={() => filterCards(id)}>
                    <div className="wrapper-text">
                        <h5 className="card-title">{movieName}</h5>
                        <p className="card-text">Release Date: {releaseDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;