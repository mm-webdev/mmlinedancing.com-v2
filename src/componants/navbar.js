import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { useSanityData } from "../hooks/useSanityData"

export default function Navigation() {
  const navlinks = useSanityData().sanitySettings.nav.filter(
    link => link.display == true
  )
  const title = useSanityData().sanitySettings.title

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navlinks.map(link => {
            return <Nav.Link href={link.path}>{link.name}</Nav.Link>
          })}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  )
}
