import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles (theme => ({
  offset: theme.mixins.toolbar,
  menuButton:{
    marginRight: theme.spacing(2)
  },
  title:{
    flexGrow: 1
  }
}))

function NavBar() {

  const classes = useStyles();

    return (
        <div>
          <AppBar>
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              Home
            </Button>
            </Toolbar>
      </AppBar>
      <div className={classes.offset} />

        </div>
    )
}

export default NavBar
