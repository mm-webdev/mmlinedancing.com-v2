import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

const contact = () => (
  <Layout>
    <Container as="heading">
      <h1 className="text-center">Contact Me</h1>
    </Container>
    <Form>
      <Form.Group controlId="contactForm.EmailAddress">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="string" />
      </Form.Group>
      <Form.Group controlId="contactForm.Body">
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>

      <Form.Group controlId="contactForm.CheckCopySend">
        <Form.Check
          type="checkbox"
          label="Send a copy to me"
          className="text-muted text-italic"
        />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">
        Send
      </Button>
    </Form>
  </Layout>
)

export default contact
