import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import "react-datepicker/dist/react-datepicker.css";
import '../scss/AddMovie.scss'
import { v4 as uuidv4 } from 'uuid';
import Error from '../components/Error';
import { Link } from "react-router-dom";


const AddMovie = () => {

    const { listedMovies, db, setArrayMovies, setCloneArrayMovies } = useContext(MovieContext);
    const [showError, setShowError] = useState(false);
    const [showErrorTipeFile, setshowErrorTipeFile] = useState(false);




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
        reader.onload = (e) => {
            setImage(reader.result);
        }
    }

    //* add the data value to state
    const handleChange = (e) => {
        setAddMovie({
            ...addMovie,
            [e.target.name]: e.target.value,
            //* add the image property to the state (addMovie)
            image: image
        });
    };
    const { title, release, description } = addMovie;

    const getMovies = async () => {
        let allMovies = await db.movies.toArray();
        setArrayMovies(allMovies);
        setCloneArrayMovies(allMovies)
        // setCloneArrayMovies(allMovies);
    }

    //* Save the movie and listed at MovieList component
    const saveMovie = async (e) => {

        e.preventDefault();
        const regularExpressionFile = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        let fileInput = document.querySelector(".uploadFile");
        let filePath = fileInput.value;

        if (title.trim() === "" || release.trim() === "" || description.trim() === "" || filePath === "") {
            setShowError(true);
            return;
        } else if (!regularExpressionFile.exec(filePath)) {
            setshowErrorTipeFile(true);
            return;
        }
        setShowError(false);
        setshowErrorTipeFile(false);

        listedMovies(addMovie);
        await db.movies.add({
            id: uuidv4(),
            title: title,
            release: release,
            description: description,
            image: image
        });

        setAddMovie({
            title: "",
            release: "",
            description: ""
        });
        getMovies();
    }

    return (
        <div className="container-fluid">

            {showError ? <Error message={'All fields are mandatory'} /> : showErrorTipeFile ? <Error message={'Type file not allowed'} /> : null}

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
                                    className="uploadFile"
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