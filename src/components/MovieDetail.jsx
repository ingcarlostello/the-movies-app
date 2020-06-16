import React,  {useContext} from 'react';

import '../scss/MovieDetail.scss';
import { MovieContext } from '../context/MovieContext';

const MovieDetail = ({titleMovie, photoMovie, releaseMovie, descriptionMovie, id}) => {
     
    const { filterCards } = useContext(MovieContext);

    return (
        <div className="container-fluid movieDetail-container">               

            <div className="movieDetail__card" onClick={() => filterCards(id)}>
                
                <div className="movieDetail__card-wrapper-photo">
                    <div className="movieDetail__card-img">
                        <img src={photoMovie} className="movieDetail__card-photo" alt="..." />
                    </div>
                </div>
                <div className="movieDetail__card-header">
                    <h2>{titleMovie}</h2>
                    <div className="card-header-date">
                        <p>{releaseMovie}</p>
                    </div>
                </div>
                <div className="movieDetail__card-text">
                    <p>{descriptionMovie}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetail;