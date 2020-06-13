import React, { useState, useContext } from 'react';
import {MovieContext} from '../context/MovieContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../scss/AddMovie.scss'

const AddMovie = () => {

    const {infoMovie} = useContext(MovieContext);

    console.log(infoMovie.title)

    // const [addMovie, setAddMovie] = useState({
    //     title: "",
    //     release: "",
    //     description: "",
    //     image: ""
    // });







    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="container-fluid">
            <form>
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
                                <input type="text" className="form-control text" />
                            </div>
                        </div>
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputDate">Release Date</label>
                                <br />
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    timeCaption="time"
                                    dateFormat="d MMM yyy"
                                />
                            </div>
                        </div>
                        <div className="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label htmlFor="inputFile">Movie Image</label>
                                <input type="file" className="form-control-file" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group text-area-wrapper">
                    <label htmlFor="inputTextArea">Example textarea</label>
                    <textarea className="form-control" ></textarea>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;