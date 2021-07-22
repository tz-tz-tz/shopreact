import React from 'react'
import ItemList from './ItemList'

function Item(props) {
    return (
        <div>
            <h1>{props.nombre}</h1>
            <h3>{props.precio}</h3>
        </div>
    )
}

export default Item
