import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './PostDtl.css';

const PostDtl = () => {
    let {postId} = useParams();
    const [postDtl, setPostDtl] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPostDtl(data))
    },[])

    const [comment, setComment] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          marginTop: '30px',
          padding: '10px'
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className="post">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>{postDtl.title}</h3>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {postDtl.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="../Posts/Posts.js"><Button variant="outlined" color="primary">Back To Post</Button></Link>
                    </CardActions>
                </Card>
                <h4 class="comment-title">Comments</h4>
                    {
                        comment.map(comment => <Comment comment={comment}></Comment>)
                    }
            </div>
            
        </Container>
        
    );
};

export default PostDtl;