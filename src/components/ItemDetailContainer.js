import React, {useState, useEffect}  from 'react'
import { getItems } from '../servicios/getItems'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItems()
        .then(resp => setItem(resp))
    }, [])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
