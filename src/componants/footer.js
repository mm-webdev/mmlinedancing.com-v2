import React from "react"
import Nav from "react-bootstrap/Nav"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import library from "../fontawesome"

const Footer = () => (
  <div as="footer">
    <Nav.Link href="https://www.facebook.com">
      <FontAwesomeIcon icon={["fab", "facebook"]} />
    </Nav.Link>
    <Nav.Link href="https://www.messenger.com">
      <FontAwesomeIcon icon={["fab", "facebook-messenger"]} />
    </Nav.Link>
    <Nav.Link href="https://www.instagram.com">
      <FontAwesomeIcon icon={["fab", "instagram"]} />
    </Nav.Link>
  </div>
)

export default Footer
