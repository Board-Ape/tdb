import React, { Component } from 'react';
import './BookResultContainer.css';

class BookResultContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: null,
        }
    }

    componentDidMount() {
        
    }

    handleChange = (event) => {
        event.preventDefault()
        const { value } = event.target

        this.setState({
            search: value
        })
    }

    render () {
        let submitIsActive = !this.state.search ? true : false;

        return (
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
    }
}

export default BookResultContainer;