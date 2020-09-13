import React from "react"
import PortableText from "@sanity/block-content-to-react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing componants
import Layout from "../componants/layout"

export default function Index() {
  const sanitySettings = useSanityData().sanitySettings
  console.log(sanitySettings)
  return (
    <Layout>
      <Container as="section" className="text-center">
        <Image
          src={sanitySettings.logo.asset.fluid.src}
          alt="Logo"
          className="mx-auto d-block logo-img py-5"
          fluid
        />
        <Row className="mx-auto d-block py-5">
          <PortableText blocks={sanitySettings.frontpagematter} />
        </Row>
      </Container>
    </Layout>
  )
}
