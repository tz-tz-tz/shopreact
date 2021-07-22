import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const handleCount=(cant)=> {
    alert(cant)
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

task.then((resp)=>console.log(resp),err=>console.log(err))

//console.log(task)



function ItemListcontainer({titulo, name}) {

      return (
       <>
        <Alert severity="success">
        <AlertTitle>{titulo}</AlertTitle>
        {name} — <strong>a nuestra Tienda OnLine</strong>
        </Alert>
        <br/>
        <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        <ItemList />

      </>
    )
}

export default ItemListcontainer
