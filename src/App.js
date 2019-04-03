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

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <TitleInput
          handleChange={this.handleChange}
          title={this.state.title}
        />
        <AuthorInput
          handleChange={this.handleChange}
          author={this.state.author}
        />
        <button>SAVE BOOKS</button>
        <BooksContainer />
      </div>
    );
  }
}

export default App;
