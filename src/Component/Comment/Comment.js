import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {name} = props.comment;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Comment;