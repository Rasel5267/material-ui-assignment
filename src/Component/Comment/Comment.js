import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: '30px',
        padding: '10px'
    },
    avatar: {
      backgroundColor: red[500],
    }
  }));

const Comment = (props) => {
  const classes = useStyles();

    const {name,email,body} = props.comment;
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <ProfilePicture></ProfilePicture>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={name}
                subheader={email}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;