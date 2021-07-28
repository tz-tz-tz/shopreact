import React from 'react'

function ItemDetail(props) {
    return (
        <div>
        <img src={props.url} alt="Imagen" height="200" />
        <h3>Nombre:{props.name }</h3>  
        <h3>Precio:{props.price}</h3> 
        </div>
    )
}

export default ItemDetail
