import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDtl = () => {
    let {postId} = useParams();
    const [postDtl, setPostDtl] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPostDtl(data))
    })
    return (
        <Container maxWidth="md">
            <div className="post">
                <h2>{postDtl.title}</h2>
                <p>{postDtl.body}</p>
                <Link to="../Posts/Posts.js"><Button variant="outlined" color="primary">Back To Post</Button></Link>
                <div className="icon">
                    <div> 
                        <i class="material-icons first-icon">thumb_up_alt</i>
                        <i class="material-icons">thumb_down_alt</i>
                    </div>
                    <div>
                        <i class="material-icons">mode_comment</i>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PostDtl;