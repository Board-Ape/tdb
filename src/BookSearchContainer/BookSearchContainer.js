import React from "react";
import BookSearches from "../BookSearches/BookSearches";

const bookSearchContainer = props => {
    return props.books.map((book, index)=> {
        return <BookSearches title={book.title} author={book.author} key={index}/>
    })
};

export default bookSearchContainer;
