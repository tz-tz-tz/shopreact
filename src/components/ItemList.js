import React, {useState, useEffect} from 'react'
import Item from './Item'
import { getItems } from '../servicios/getItems'

function ItemList() {
   
    const [itemList, setItemList] = useState([])

useEffect(() => {
            getItems()
            .then((resp)=> setItemList(resp))
            .catch(err=> {console.log('un error')})

    }, [])

console.log(itemList)

    return (
        <div>
             {itemList.map((items)=> <Item key={items.id} nombre={items.nombre} precio={items.precio} url={items.url}/>)}
        </div>
    )
}

export default ItemList
