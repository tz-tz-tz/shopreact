import React, {useState, useEffect}  from 'react'
import { getItems } from '../servicios/getItems'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        
        if(itemId===undefined){
            getItems()
            .then(resp => setItem(resp))
        }else{
            getItems()
            .then(resp => setItem(resp.filter(it => it.id===itemId)))
        }
            
    }, [itemId])

    console.log(itemId);  
    console.log(item)

    return (
        <div>
           {item.map((items)=> <ItemDetail key={items.id} name={items.nombre} price={items.precio} categoria={items.categoria} url={items.url}/>)}
        </div>
    )
}

export default ItemDetailContainer
