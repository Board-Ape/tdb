import React, { Component } from 'react';
import './BookResultContainer.css';
import axios from 'axios';
import spinner from './Spinner.gif';

class BookResultContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            bookList: [],
            isLoading: false
        }
    }

    componentDidMount() {
        console.log("1",this.state.isLoading)
        this.setState({isLoading: true})
        
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
            .then(response => {
                const newState = [...this.state.bookList, response.data.items]
                console.log("2", this.state.isLoading);
                this.setState({
                    bookList: newState
                })
                setTimeout(() => this.setState({ isLoading: false }),3000);
                console.log("3", this.state.isLoading);
            })
    }


    handleChange = (event) => {
        event.preventDefault()
        const { value } = event.target

        this.setState({
            search: value
        })
    }

    render () {
        const showSpinner = this.state.isLoading;
        const submitIsActive = !this.state.search ? true : false;
        let searchArea = null;

        if (!showSpinner) {
            searchArea = (
                <div>
                    <input
                        className="searchInput"
                        placeholder="Search Book"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                    <button disabled={submitIsActive}>SEARCH</button>
                </div>
            )
        } else {
            searchArea = (
                <div>
                    <h1>Loading...</h1>
                    <img src={spinner} alt="loading..." />
                </div>
            )
        }

        return (
            <div>
                {searchArea}
            </div>
        )
    }
}

export default BookResultContainer;