import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { Alert } from '@material-ui/lab'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';


function ItemCount({initial, stock, onAdd}) {

    const [cantidad, setCantidad] = useState(initial)

    const [show, setShow] = useState(false)
    
    const handleAdd=()=>{
        if (cantidad < stock) {
        setCantidad(cantidad+1)
        }

    }
    const handleRemove=()=>{
        if (cantidad > initial) {
        setCantidad(cantidad-1)
        }
    }

    const handleOnAdd=()=>{
        onAdd(cantidad);
        setShow(true)
        
    }
    console.log(show)
    console.log(cantidad)

    return (
        <>
        <Grid item xs={3}>
        <Card>
        <CardHeader
        title="ItemCount"
          />
        <Alert severity="success">
        <Typography align="center" variant="h5">
        {cantidad}
         </Typography>
          </Alert>
        <Button variant="contained" color="default" onClick={handleRemove} fullWidth>
          -
        </Button>
        <Button variant="contained" color="default" onClick={handleAdd} fullWidth>
          +
        </Button>
        <br/>
        <Button variant="contained" color="primary" onClick={handleOnAdd} fullWidth>
          Add To Cart
        </Button>
        {show && <Button variant="contained" color="secondary" fullWidth>terminar la compra</Button>}
        </Card>
        </Grid>
        
        </>
    )
}

export default ItemCount
