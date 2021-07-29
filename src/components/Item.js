import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'


function Item(props) {
    return (
        <div>
            <Card>
            <img src={props.url} alt="Imagen" height="200" />
            <h1>{props.nombre}</h1>
            <h3>{props.precio}</h3>
            <NavLink to={`/item/${props.id}`}>
            <Button variant="contained" color="default">
              Detalles
            </Button>
            </NavLink>
             </Card>
        </div>
    )
}

export default Item
