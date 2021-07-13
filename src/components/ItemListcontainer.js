import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';


function ItemListcontainer({titulo, name}) {
    return (
        <Alert severity="success">
        <AlertTitle>{titulo}</AlertTitle>
        {name} — <strong>a nuestra Tienda OnLine</strong>
        </Alert>
    )
}

export default ItemListcontainer
