import React, { Component } from 'react';
import './App.css';
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BookSearchContainer from "./BookSearchContainer/BookSearchContainer";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      books: [
        {'title': 'Create', 'author': 'Johnson Murphy'},
        {'title': 'Make', 'author': 'Cramin Turf'},
        {'title': 'Find', 'author': 'Joe Bond'}
      ]
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  submitBooks = (event) => {
    event.preventDefault()
    const {title, author} = this.state

    const titleAndAuthor = { 'title': title, 'author': author}
    const newState = [...this.state.books, titleAndAuthor]

    this.setState({
      books: newState
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
        <button onClick={this.submitBooks}>SAVE BOOKS</button>
        <div className='booksContainer'>
          <BookSearchContainer books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
