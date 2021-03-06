import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
    const classes = useStyles();
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
              <Container>
                  <Toolbar>
                      <Typography variant="h6" className={classes.title}>
                        News
                      </Typography>
                      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                      </IconButton>
                  </Toolbar>
              </Container>
          </AppBar>
        </div>
        <div className="title">
          <h1>Welcome to Our News Portal</h1>
        </div>
      </div>


    );
};

export default Header;