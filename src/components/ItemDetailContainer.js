import React, {useState, useEffect}  from 'react'
import { getItems } from '../servicios/getItems'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [item, setItem] = useState([])

    const { categoryId } = useParams()

    console.log(categoryId);  

    useEffect(() => {
        if (categoryId===undefined) {
            getItems()
            .then(resp => setItem(resp))
        } else {
            getItems()
            .then(resp => setItem(resp.filter(it => it.categoria===categoryId)))
                
        }
    }, [categoryId])


    return (
        <div>
           {item.map((items)=> <ItemDetail key={items.id} name={items.nombre} price={items.precio}/>)}
        </div>
    )
}

export default ItemDetailContainer
