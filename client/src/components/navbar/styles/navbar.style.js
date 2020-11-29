import styled from 'styled-components/macro'
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: red;
  height: 80px;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  color: white;
  font-size: 2rem;
  display: flex;
  align-self: center;
  text-decoration: none;
  cursor: pointer;

  /* @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  } */

`

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* position: absolute;
  top: 0;
  right: 0; */
  cursor: pointer;
  color: white;

  p {
    /* transform: translate(-175%, 100%); */
    font-weight: bold;
  }
`

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  padding-left: .5rem;
  /* transform: translate(-150%, 75%); */
`
