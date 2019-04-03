import React from "react";
import BookSearches from "../BookSearches/BookSearches";

const bookSearchContainer = props => {
    return props.books.map(book => {
        return <BookSearches title={book.title} author={book.author} />
    })
};

export default bookSearchContainer;
