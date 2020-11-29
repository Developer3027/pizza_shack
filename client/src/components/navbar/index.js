import React from 'react'

import { Nav, NavLink, NavMenu, Bars } from './styles/navbar.style'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavMenu onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
