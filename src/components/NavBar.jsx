import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


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
            <CartWidget />
          </IconButton>
            <Typography variant="h6" className={classes.title}>
              Tienda de Ropa
            </Typography>
                       
            <NavLink to="/"><Button variant="contained" color="primary" >  Home</Button> </NavLink> 
            <NavLink to="/category/pantalones" ><Button variant="contained" color="primary" >  Pantalones</Button> </NavLink> 
            <NavLink to="/category/camperas"><Button variant="contained" color="primary" >  Camperas</Button> </NavLink> 
          </Toolbar>
      </AppBar>
      <div className={classes.offset} />

        </div>
    )
}

export default NavBar
