import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMovie = () => {

     const [startDate, setStartDate] = useState(new Date());   
    console.log(startDate);
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}          
                timeCaption="time"
                dateFormat="d MMM yyy"
            />            
        </div>
    );
};

export default AddMovie;