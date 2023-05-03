import React, {useState} from "react";

import './NewBook.css'

function NewBook(props){
    const [name, setName]= useState('')
    const [amount, setAmount]= useState('')
    const [year, setYear]= useState('')


    function getNameValue(event){
        let value = event.target.value;
        setName(value)
    }
    function getAmountValue(event){
        let value = event.target.value;
        setAmount(value)
    }
    function getYearValue(event){
        let value = event.target.value;
        setYear(value)
    }

    function submit(event){

        const inputs = {
            title: name,
            amount: amount,
            date: new Date(year),
            id: Math.random().toString()
        }
        props.onAddBook(inputs)
        event.preventDefault()
    }

return(
    <form onSubmit={submit} className='form'>
        <div>
          <div className="input-handler">
            <div>
                <label> Book Name</label>
                <input 
                value={name} 
                onChange={getNameValue}
                type='text'
                />
            </div>
            <div>
                <label> Amount </label>
                <input 
                value={amount} 
                onChange={getAmountValue}
                type='number'
                min='1'
                />
            </div>
            <div>
                <label> Year </label>
                <input 
                value={year} 
                onChange={getYearValue}
                type='date'
                min='2019-01-01'
                max='2023-12-31'
                />
            </div>
        </div>
            <button type='submit'>Add book</button>
        </div>
    </form>
)
}

export default NewBook;