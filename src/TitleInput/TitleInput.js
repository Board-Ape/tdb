import React from "react";

const titleInput = props => {
    return (
        <div>
            <h1>Title Input: </h1>
            <form>
                <input
                    name='title' 
                    placeholder='Enter Title'
                    value={props.author}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    );
};

export default titleInput;
