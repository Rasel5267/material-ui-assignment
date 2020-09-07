import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

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

export default function Post(props) {
  const{title,body,id}= props.post; 
  const classes = useStyles();

  return (
    <Container maxWidth="md">
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h3>{title}</h3>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/postDtl/${id}`}><Button variant="outlined" color="primary">Read More</Button></Link>
            </CardActions>
        </Card>
    </Container>
  );
}
