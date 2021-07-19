import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { Alert, AlertTitle } from '@material-ui/lab'

function ItemCount({initial, stock, onAdd}) {

    const [cantidad, setCantidad] = useState(initial)
    
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
        onAdd(cantidad)
    }

    return (
        <>
      
        <Alert severity="success">
        <AlertTitle>ItemCount</AlertTitle>
        {cantidad}
        </Alert>
        <Button variant="text" color="default" onClick={handleRemove}>
          -
        </Button>
        <Button variant="text" color="default" onClick={handleAdd}>
          +
        </Button>
        <br/>
        <Button variant="text" color="primary" onClick={handleOnAdd}>
          Add To Cart
        </Button>

        </>
    )
}

export default ItemCount
