const itemProductos=[{
    id: "1",
    nombre: 'Campera Roja',
    precio: 12300,
    categoria: "camperas",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
},
{
    id: 2,
    nombre: 'Campera Verde',
    precio: 12300,
    categoria: "camperas",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
},
{
    id: 3,
    nombre: 'Campera Azul',
    precio: 12300,
    categoria: "camperas",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
},
{
    id: 4,
    nombre: 'Pantalon Rojo',
    precio: 12300,
    categoria: "pantalones",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
},
{
    id: 5,
    nombre: 'Pantalon Azul',
    precio: 12300,
    categoria: "pantalones",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
}];

const task = new Promise((res)=>{
    res(itemProductos)
}, 2000)


export const getItems=()=>{
    return(
        task
    )
}

console.log(task)