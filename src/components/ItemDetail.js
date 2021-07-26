import React from 'react'

function ItemDetail({item={}}) {
    return (
        <div>
        <img src={item.url} alt="Imagen" height="200" />
        <h3>Nombre:{item.nombre }</h3>  
        <h3>Precio:{item.precio}</h3> 
        </div>
    )
}

export default ItemDetail
