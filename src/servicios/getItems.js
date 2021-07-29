const itemProductos=[{
    id: "1",
    nombre: 'Campera Roja',
    precio: 12300,
    categoria: "camperas",
    url: 'https://www.kvnstatic.com/productos/M5890047/M5890047-campera-cuero-roja-mujer-kevingston.jpg'
},
{
    id: "2",
    nombre: 'Campera Verde',
    precio: 10700,
    categoria: "camperas",
    url: 'https://http2.mlstatic.com/D_NQ_NP_643602-MLA43778057950_102020-W.jpg'
},
{
    id: "3",
    nombre: 'Campera Azul',
    precio: 11400,
    categoria: "camperas",
    url: 'https://i.pinimg.com/originals/4a/ac/11/4aac11cc62371cfda46046e144ec2548.jpg'
},
{
    id: "4",
    nombre: 'Pantalon Rojo',
    precio: 8300,
    categoria: "pantalones",
    url: 'https://notilook.com.ar/wp-content/uploads/2019/02/pantalon-simil-cuero-rojo-mujer-invierno-2019-Doll-Store.jpg'
},
{
    id: "5",
    nombre: 'Pantalon Azul',
    precio: 6300,
    categoria: "pantalones",
    url: 'https://cdn.lookastic.es/pantalones-de-cuero-azul-marino-original-10241171.jpg'
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