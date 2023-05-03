import React from "react";

import './css/Data.css'

function Data(props){

    const year = props.date.toLocaleString('en-US', { month: 'long' });
    const month = props.date.toLocaleString('en-US', { day: '2-digit' });
    const day = props.date.getFullYear()


return(
    <div className="expense-date">
        <div className="year">{year}</div>
        <div className="month">{month}</div>
        <div className="day">{day}</div>
    </div>
)

}

export default Data;