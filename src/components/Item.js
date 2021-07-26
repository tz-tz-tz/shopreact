import React from 'react'
import Card from '@material-ui/core/Card';

function Item(props) {
    return (
        <div>
            <Card>
            <h1>{props.nombre}</h1>
            <h3>{props.precio}</h3>
            </Card>
        </div>
    )
}

export default Item
