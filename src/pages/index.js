import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing componants
import Layout from "../componants/layout"



export default function Index() {
  const sanitySettings = useSanityData().allSanitySettings
  console.log(JSON.stringify(sanitySettings))
  return (
    <Layout>
      <Container as="section" className="text-center">
        <Image
          src="`${sanitySettings.nodes.logo.asset.fluid.src}`"
          alt="Logo"
          className="mx-auto d-block logo-img"
          fluid
        />
        <Row className="mx-auto d-block">
          <h2>Line dance classes with Michelle</h2>
        </Row>
        <Row className="mx-auto d-block pt-2">
          <h2 className="text-secondary text-italic">
            All levels welcome.No dance experience or partners necessary.
          </h2>
        </Row>
      </Container>
    </Layout>
  )
}
