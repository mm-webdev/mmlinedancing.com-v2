import React from "react"

import Navigation from "../componants/navbar"
import Footer from "../componants/footer"
import { Container } from "react-bootstrap"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

export default function Layout({ children }) {
  return (
    <body>
      <Navigation />
      <Container as="main" className="p-3">
        {children}
      </Container>
      <Footer />
    </body>
  )
}
