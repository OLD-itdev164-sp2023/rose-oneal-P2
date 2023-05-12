import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

const Header = ({ siteTitle }) => {
  //start creating nav
  return (
    <Nav>
    <NavLink to="/">CSRO</NavLink>
    <Bars />
    </Nav>
  )
}

export default Header

//styling the nav
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc()((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)` 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

//using react icons to get a style for the nav bars
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  //make sure that site displays well on a mobile device
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
