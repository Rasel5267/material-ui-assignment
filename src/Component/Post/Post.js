import React from 'react';
import { Button, Container } from '@material-ui/core';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const{title,body,id}= props.post;
    return (
        <Container maxWidth="md">
            <div className="post">
                <h2>{title}</h2>
                <p>{body}</p>
                <Link to={`/postDtl/${id}`}><Button variant="outlined" color="primary">Read More</Button></Link>
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

export default Post;