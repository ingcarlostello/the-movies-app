import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import "react-datepicker/dist/react-datepicker.css";
import '../scss/AddMovie.scss'

const AddMovie = () => {

    const { listedMovies, db } = useContext(MovieContext);
    console.log(db);
    

    //* state to string values
    const [addMovie, setAddMovie] = useState({
        title: "",
        release: "",
        description: ""
    });
    //* state to images
    const [image, setImage] = useState();
    
    //* allow read the image file from pc and decode it
    const getFile = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e[0]);
        reader.onload= (e) => {
            setImage(reader.result);
        }
    }

    //* add the data value to state
    const handleChange = (e) => {
        setAddMovie({
            ...addMovie,
            [e.target.name]: e.target.value,
            //* add the image property to the state (addMovie)
            image:image          
        });
    };
    const { title, release, description } = addMovie;

    //* Save the movie and listed at MovieList component
    const saveMovie = async (e) => {
        e.preventDefault();
        listedMovies(addMovie);
        await db.movies.add({
            title: title,
            release: release,
            description: description,
            image:image
        });
        setAddMovie({
            title: "",
            release: "",
            description: ""
        })       
    }
    
    return (
        <div className="container-fluid">
            <form
                onSubmit={saveMovie}
            >
                <div className="form-card-header card-header">
                    <h3>Add Movie</h3>
                    <div className="form-header-button-wrapper">
                        <button type="submit" className="btn btn-primary">Save Movie</button>
                    </div>
                </div>

                <div className="inputs-wrapper">

                    <div className="row">
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputText">Movie Title</label>
                                <input
                                    type="text"
                                    className="form-control text"
                                    name="title"
                                    placeholder="Movie Name"
                                    value={title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputDate">Release Date</label>
                                <br />
                                <input
                                    type="date"
                                    name="release"
                                    value={release}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputFile">Movie Image</label>
                                <input 
                                    type="file" 
                                    name="image"  
                                    onChange={e => getFile(e.target.files)}                               
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group text-area-wrapper">
                    <label htmlFor="inputTextArea">Example textarea</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;