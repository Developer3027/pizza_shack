import React from 'react'

import { SidebarContainer, SidebarMobile, SidebarIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles/sidebar.styles'

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarMobile>
          <SidebarIcon />
        </SidebarMobile>
        <SidebarMenu>
          <SidebarLink to="/" >Pizza</SidebarLink>
          <SidebarLink to="/" >Sides</SidebarLink>
          <SidebarLink to="/" >Dessert</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" >Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
