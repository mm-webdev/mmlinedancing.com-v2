import React from "react"

import Navigation from "../componants/navbar"
import Footer from "../componants/footer"
import { Container } from "react-bootstrap"

// Importing the Bootstrap CSS created with Themestr.app
import '../stylesheets/theme.scss';
import library from '../fontawesome';

export default function Layout({ children }) {
  return (
    <body>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </body>
  )
}
