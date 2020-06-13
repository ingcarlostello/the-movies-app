import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import "react-datepicker/dist/react-datepicker.css";
import '../scss/AddMovie.scss'

const AddMovie = () => {

    const { listedMovies } = useContext(MovieContext);

    const [addMovie, setAddMovie] = useState({
        title: "",
        release: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        setAddMovie({
            ...addMovie,
            [e.target.name]: e.target.value
        });
    };
    const { title, release, image, description } = addMovie;

    //* Save the movie and listed at MovieList component
    const saveMovie = (e) => {
        e.preventDefault();
        listedMovies(addMovie);
         setAddMovie({
             title: "",
            release: "",
            image: "",
            description: ""
        })
    }

    return (
        <div className="container-fluid">
            <form
                onSubmit={saveMovie}
                // onClick={() =>  <Link to="/">Home</Link>}
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
                                {/* <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    timeCaption="time"
                                    dateFormat="d MMM yyy"
                                /> */}
                            </div>
                        </div>
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputFile">Movie Image</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    name="image"
                                    onChange={handleChange}
                                    value={image}
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