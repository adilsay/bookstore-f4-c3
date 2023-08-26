import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const harryPotterBooks = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
const SherlockBooks =  "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
let api = "https://www.googleapis.com/books/v1/volumes?q="

const BooksData = () =>{

    const [books, setBooks] = useState([]);
     
    
    
    useEffect(() => { 
        axios.get(harryPotterBooks)
        .then(response => {
            setBooks(response.data.items);
          })
          axios.get(SherlockBooks)
          .then(response => {
                setBooks(response.data.items);
          }) 
          .catch(error => console.log(error))
    }, [])
    console.log(books);
    
    // write the function to get the value of the search term as an parameter and add it to the
    //  book list.
    const handleClick = (e) => {
        e.preventDefault();
        let searchTerm = document.getElementById("books").value;
        console.log(searchTerm);
        axios.get(api + searchTerm)
      .then(response => {
            setBooks(response.data.items);
        })
      .catch(error => console.log(error))
    }
    
    return(
        <div>
            <h1>Books Data</h1>
            <input type="search" id="books" name="books" placeholder = "Books"
            ></input>
            <button onClick={handleClick}>Get Books</button>
            
            <div className="books-container">
                {
                books && books.map(book => (
                    <div key={book.volumeInfo.title} className="book">
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.authors}</p>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    </div>))
                }
                
            </div>

                
        </div>
    )
}

export default BooksData;