import React, { useState } from 'react'
import TextWrap from '../UI/TextWrap'
import SingleItem from './SingleItem';

import './css/Expenses.css'
import Filter from './Filter';

function Expenses(props){

    const [year, setYear] = useState('2021')

    function getValue(chosenYear){
        setYear(chosenYear)
    }

    const select = props.items.filter((element)=>{
        return element.date.getFullYear().toString() == year
    })
return (
    <div>
    <TextWrap className='expenses'>
    <Filter 
    selectedYear = {year}
    getValue={getValue}
    />
    {select.map((singleElement)=>{
        return <SingleItem 
        key={singleElement.id}        
        title={singleElement.title}
        amount={singleElement.amount}
        date={singleElement.date}
        />
    })}
    </TextWrap>
    </div>
)
}

export default Expenses;