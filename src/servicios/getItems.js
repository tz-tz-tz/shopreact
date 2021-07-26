const item={
    nombre: 'Campera Roja',
    precio: 12300,
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
}

const task = new Promise((res)=>{
    res(item)
}, 2000)

export const getItems=()=>{
    return(
        task
    )
}