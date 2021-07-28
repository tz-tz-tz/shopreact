import React  from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const handleCount=(cant)=> {
    alert(cant)
}

function ItemListcontainer({titulo, name}) {

  const { categoryId } = useParams()

  console.log(categoryId);


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