import React, {useState, useEffect} from 'react'
import Item from './Item'


function ItemList() {
   
    const [itemList, setItemList] = useState([])

useEffect(() => {

    const getPromiseTask=()=>{
    return task
    }

    const itemArray = [
                { id: "12", title: "Campera1", price: 1000 },
                { id: "13", title: "Campera2", price: 2000 },
                { id: "14", title: "Campera3", price: 3000 },
            ];
            
            const task = new Promise((resuelto, rechazado)=>{
                let status=200
                if (status===200) {
                setTimeout(()=>{
                resuelto(itemArray)
                },3000)
                } else {
                rechazado('Rechazado')
                }
            })
            
            getPromiseTask()  
            .then((resp)=> setItemList(resp))
            .catch(err=> {console.log('un error')})

    }, [])

    return (
        <div>
             {itemList.map((items)=> <Item key={items.id} nombre={items.title} precio={items.price}/>)}
        </div>
    )
}

export default ItemList
