import React from 'react'

import { Nav, NavLink, NavMenu, Bars } from './styles/navbar.style'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" >Pizza</NavLink>
        <NavMenu>
          <p>Menu</p>
          <Bars />
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
