import React from "react";

import './css/Filter.css'

function Filter(props){

    function sendValue(event){
        props.getValue(event.target.value)
    }


    return(
        <div>
        <div className="filter">
    <select className="button" value={props.selectedYear} onChange={sendValue}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
    </select>
    </div>
    <label>Filter Year</label>
        </div>
    )
}

export default Filter;