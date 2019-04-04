import React, { Component } from 'react';
import './BookResultContainer.css';

class BookResultContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render () {
        return (
            <div>
                <input
                    className="searchInput" 
                    placeholder="Search Book"
                />
                <button>SEARCH</button>
            </div>
        )
    }
}

export default BookResultContainer;