import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar: {
      backgroundColor: "#0081a2"
    },
    title: {
      flexGrow: 1,
    },
  })
);
  
export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar className={classes.bar} position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                StepUp App
              </Typography>
              <Button color = "inherit">Log Out</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}