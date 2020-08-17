import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
    <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
    <Navbar.Brand href="/">
        MM Line Dancing
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/timetable">Timetable</Nav.Link>
        <Nav.Link href="/dances">Dance List</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )

export default Navigation;