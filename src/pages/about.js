import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

const about = () => (
  <Layout>
    <Container as="heading">
      <h1 className="text-center">About Me</h1>
    </Container>
    <Container fluid>
      <Row className="d-flex">
        <Col>
          <img className="p-2 border border-primary" src="images/about.jpg" />
        </Col>
        <Col>
          <p className="text-left p-2 text-about">Insert text here.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default about
