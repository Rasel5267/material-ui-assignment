import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {id} = props.comment;
    return (
        <div>
            <h4>Comments</h4>
            <p>User Id: {id}</p>
        </div>
    );
};

export default Comment;