import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing componants
import Layout from "../componants/layout"

const index = () => (
  <Layout>
    <Container as="section" className="text-center">
      <Image
        src="images\mmlinedancing-logo.png"
        alt="Logo"
        className="mx-auto py-5 d-block"
        fluid
      />
      <Row className="px-3">
        <h3>Line dance classes with Michelle</h3>
      </Row>
      <Row>
        <h4 class="text-muted pt-2">
          All levels welcome. No dance experience or partners necessary.
        </h4>
      </Row>
    </Container>
  </Layout>
)

export default index
