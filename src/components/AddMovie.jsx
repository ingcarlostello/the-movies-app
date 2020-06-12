import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../scss/AddMovie.scss'

const AddMovie = () => {

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    return (
        <div className="container-fluid">
            <form>
                <div class="form-card-header card-header">
                    <h3>Add Movie</h3>
                    <div className="form-header-button-wrapper">
                        <button type="submit" className="btn btn-primary">Save Movie</button>
                    </div>
                </div>

                <div className="inputs-wrapper">

                    <div class="row">
                        <div class="col-sm col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="inputText">Movie Title</label>
                                <input type="text" className="form-control text" />
                            </div>
                        </div>
                        <div class="col-sm col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="inputDate">Release Date</label>
                                <br />
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    timeCaption="time"
                                    dateFormat="d MMM yyy"
                                />
                            </div>
                        </div>
                        <div class="col-sm col-md-12 col-lg-4">
                            <div className="form-group">
                                <label for="inputFile">Movie Image</label>
                                <input type="file" className="form-control-file" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group text-area-wrapper">
                    <label for="inputTextArea">Example textarea</label>
                    <textarea class="form-control" ></textarea>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;