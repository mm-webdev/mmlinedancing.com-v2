import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import library from '../fontawesome'

const Footer = () => (



        <Nav as="footer" className="justify-content-center" variant="light">
                <Nav.Link href="https://www.facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} /></Nav.Link>
                <Nav.Link href="https://www.messenger.com"><FontAwesomeIcon icon={['fab', 'facebook-messenger']} /></Nav.Link>
                <Nav.Link href="https://www.instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></Nav.Link>
        </Nav>
);

export default Footer;