import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { useSanityData } from "../hooks/useSanityData"

export default function Navigation() {
  const navlinksDirty = useSanityData().sanitySettings.nav
  const navlinks = navlinksDirty.filter (function (navlinksDirty) {
    return navlinksDirty.hide === false
  })
  console.log(navlinks)
  console.log(navlinksDirty)

  return (
    
    <Navbar expand="lg" bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Navbar.Brand href="/">
        {useSanityData().sanitySettings.title}
      </Navbar.Brand>
          {navlinks.map(link => {
            return <Nav.Link href={link.path}>{link.name}</Nav.Link>
          })}
        </Nav>

      </Navbar.Collapse>
      
    </Navbar>
  )
}
