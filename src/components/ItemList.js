import React, {useState, useEffect} from 'react'
import Item from './Item'
import { getItems } from '../servicios/getItems'
import { useParams } from 'react-router-dom'

function ItemList() {
   
    const [itemList, setItemList] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        
        if(categoryId===undefined){
            getItems()
            .then(resp => setItemList(resp))
        }else{
            getItems()
            .then(resp => setItemList(resp.filter(it => it.categoria===categoryId)))
        }
            
    }, [categoryId])

console.log(categoryId)   
console.log(itemList)

    return (
        <div>
             {itemList.map((items)=> <Item key={items.id} nombre={items.nombre} precio={items.precio} url={items.url}/>)}
        </div>
    )
}

export default ItemList
