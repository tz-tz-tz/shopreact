import React, {useState, useEffect} from 'react'
import Item from './Item'
import Card from '@material-ui/core/Card';

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
            <Item /> 
            <ul>
            {itemList.map(item=> <Card key={item.id}> <li>{item.title} </li></Card>)}
            </ul>           
        </div>
    )
}

export default ItemList
