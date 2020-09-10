import React from "react"
import SiteMeta from "./siteMeta"
import Navigation from "./navbar"
import Footer from "./footer"
import { Container } from "react-bootstrap"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

export default function Layout({ children }) {
  return (
    <div>
      <SiteMeta />
      <Navigation />
      <Container as="main">{children}</Container>
      <Footer />
    </div>
  )
}
