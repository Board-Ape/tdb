import React from 'react';

const authorInput = (props) => {
    return (
        <div>
            <h1>Author Input: </h1>
            <form>
                <input
                    name='author' 
                    placeholder="Enter Title" 
                    value={props.title}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    );
}

export default authorInput;