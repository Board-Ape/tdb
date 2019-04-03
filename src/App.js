import React, { Component } from 'react';
import './App.css';
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BooksContainer from './BooksContainer/BooksContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      books: []
    }
  }

  render() {
    return (
      <div className="App">
        <TitleInput />
        <AuthorInput />
        <BooksContainer />
      </div>
    );
  }
}

export default App;
