import React from 'react'

function NavBar() {
    return (
        <div>
            <header class="header">
  <a href="" class="logo">Tienda Ropa Cuero</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Home</a></li>
    <li><a href="#about">Nosotros</a></li>
    <li><a href="#careers">Categoria</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</header>
        </div>
    )
}

export default NavBar
