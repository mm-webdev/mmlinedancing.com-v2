import React from "react"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

const dances = () => (
  <Layout>
    <Container as="heading">
      <h1 className="text-center">Dance List</h1>
    </Container>
    <Table responsive="md" bordered hover variant="primary">
      <tr>
        <th>Name</th>
        <th>Day & Time</th>
        <th>Level</th>
        <th>Location</th>
        <th>Cost</th>
      </tr>
      <tr>
        <td>1. Example Name</td>
        <td>Example Day & Time</td>
        <td>Example Level</td>
        <td>Example Location</td>
        <td>Example Cost</td>
      </tr>
      <tr>
        <td>2. Example Name</td>
        <td>Example Day & Time</td>
        <td>Example Level</td>
        <td>Example Location</td>
        <td>Example Cost</td>
      </tr>
      <tr>
        <td>3. Example Name</td>
        <td>Example Day & Time</td>
        <td>Example Level</td>
        <td>Example Location</td>
        <td>Example Cost</td>
      </tr>
    </Table>
  </Layout>
)

export default dances
