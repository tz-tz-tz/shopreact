import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(48),
      },
    },
  }));



function Item(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
            <img src={props.url} alt="Imagen" height="200" />
            <h1>{props.nombre}</h1>
            <h3>{props.precio}</h3>
            <NavLink to={`/item/${props.id}`}>
            <Button variant="contained" color="primary">
              Detalles
            </Button>
            </NavLink>
             
             </Paper>
        </div>
    )
}

export default Item
