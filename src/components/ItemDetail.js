import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ItemCount from './ItemCount'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(48),
      },
    },
  }));

const handleCount=(cant)=> {
    alert(cant)
 }


function ItemDetail(props) {
    const classes = useStyles();
    return (

        <div className={classes.root} >
        <Paper>
        <img src={props.url} alt="Imagen" height="200" />
        <h2>Nombre:{props.name }</h2>  
        <h3>Precio:${props.price}</h3> 
        <h3>Categoria:{props.categoria}</h3> 
        </Paper>
        <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemDetail
