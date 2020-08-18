import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby-link"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Contact Me</h1>
      </Container>
      <Form 
        name="contactForm"
        action="/submitted/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}>
        <Form.Control as="input" type="hidden" name="bot-field" onChange={handleChange} />
        <Form.Group controlId="contactForm.EmailAddress">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="contactForm.EmailAddress" type="email" placeholder="name@example.com" onChange={handleChange} required={true} />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control name="contactForm.Subject" type="string" placeholder="RE: MM Line Dancing" onChange={handleChange} required={true} />
        </Form.Group>
        <Form.Group controlId="contactForm.Body">
          <Form.Label>Details</Form.Label>
          <Form.Control name="contactForm.Body" as="textarea" rows="5" onChange={handleChange}  required={true} />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
        <Button variant="primary" name="contactForm.Submit" type="submit" size="lg">Submit Contact Form</Button>
        </Form.Group>
      </Form>
    </Layout>
  )
}
