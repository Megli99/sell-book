import React, { useState } from 'react'
import Expenses from './components/Expenses';
import NewBook from './newBook/NewBook.js'

const BOOKS = [
  {
    id:'e1',
    title: 'Book 1',
    amount: 50,
    date: new Date(2022, 5, 21),
  },
  {
    id:'e2', 
    title: 'Book 2',
    amount: 65,
    date: new Date(2021, 4, 22) 
  },
  {
    id:'e3',
    title: 'Book 3',
    amount: 34,
    date: new Date(2022, 2, 7),
  },
  {
    id:'e4',
    title: 'Book 4',
    amount: 28,
    date: new Date(2021, 11, 12),
  }
]

function App() {

  const [array, setArray] = useState(BOOKS)

  function addBook(value){
    setArray((prevItem)=>{
     return  [value, ...prevItem]
  })
  }


  return (
    <div>
    <NewBook
     onAddBook = {addBook}
    />
    <Expenses
    items = {array}
    />
    </div>
  );
}

export default App;
