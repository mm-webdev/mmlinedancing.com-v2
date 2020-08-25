import React from "react"
import PortableText from "@sanity/block-content-to-react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Figure from "react-bootstrap/Figure"

// Importing componants
import Layout from "../componants/layout"

export default function About() {
  const sanitySettings = useSanityData().sanitySettings
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">About</h1>
      </Container>
      <Container>
        <Row>
          <Col lg={8}>
            <p className="text-left p-2 text-about">
              <PortableText blocks={sanitySettings.aboutBlurb} />
            </p>
          </Col>
          <Col lg={4}>
            <Figure className="p-2 m-2 border border-primary rounded">
              <Figure.Image
                className="img-fluid"
                src={sanitySettings.aboutImage.asset.fluid.src}
                alt={sanitySettings.aboutImageCaption}
              />
              <Figure.Caption className="text-center font-italic tiny">
                {sanitySettings.aboutImageCaption}
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
