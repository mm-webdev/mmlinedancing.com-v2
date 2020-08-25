import React from "react"
import PortableText from "@sanity/block-content-to-react";
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing componants
import Layout from "../componants/layout"

export default function About() {
  const sanity = useSanityData()
  return (
  <Layout>
    <Container as="heading">
      <h1 className="text-center">About Me</h1>
    </Container>
    <Container>
      <Row>
        <Col lg={8}>
          <p className="text-left p-2 text-about"><PortableText blocks={sanity.sanitySettings.aboutBlurb} /></p>
        </Col>
        <Col lg={4}>
          <img
            className="p-2 m-2 border border-primary rounded img-fluid"
            src={sanity.sanitySettings.aboutImage.asset.fluid.src}
            alt={sanity.sanitySettings.aboutImageCaption}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)
}