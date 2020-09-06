import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    let {id} = useParams();
    const [comments, setComments] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
        
    })
    return (
        <div>
            {
                comments.map(comment =><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;