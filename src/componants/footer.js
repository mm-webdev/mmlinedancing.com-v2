import React from "react"
import Nav from "react-bootstrap/Nav"
import { useSanityData } from "../hooks/useSanityData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  const socials = useSanityData().allSanitySettings.nodes.socials
  return (
    <Nav as="footer" className="justify-content-center" variant="light">
      {socials.map(social => {
        return (
          <Nav.Link href={social.url}>
            <FontAwesomeIcon icon={["fab", `${social.facode}`]} />
          </Nav.Link>
        )
      })}
    </Nav>
  )
}
