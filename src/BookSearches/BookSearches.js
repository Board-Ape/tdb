import React from 'react';
import "./BookSearches.css";

const bookSearches = props => {
  return (
      <div className="bookSearches">
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </div>
  );
};

export default bookSearches;