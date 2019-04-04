import React, { Component } from 'react';
import './App.css';
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BookSearchContainer from "./BookSearchContainer/BookSearchContainer";
import BookResultsContainer from "./BookResultsContainer/BookResultsContainer";

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

  resetDefaultBooks = (event) => {
    event.preventDefault()
    const originalState = [
      { 'title': 'Create', 'author': 'Johnson Murphy'},
      { 'title': 'Make', 'author': 'Cramin Turf'},
      { 'title': 'Find', 'author': 'Joe Bond'}
    ]

    this.setState({
      books: originalState
    })
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
    let resetIsActive = this.state.books.length <= 3 ? true : false
    let inputIsActive = !this.state.title || !this.state.author ? true : false

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
        <button 
          onClick={this.submitBooks} 
          disabled={inputIsActive}
        >SAVE BOOKS</button>
        <button
          onClick={this.resetDefaultBooks}
          disabled={resetIsActive}
        >RESET BOOKS</button>
        <div className="booksContainer">
          <BookSearchContainer books={this.state.books} />
        </div>
        <BookResultsContainer />
      </div>
    );
  }
}

export default App;
