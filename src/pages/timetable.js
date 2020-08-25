import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

export default function Timetable() {
  const sanity = useSanityData()
  return (
  <Layout>
    <Container as="heading">
      <h1 className="text-center">Timetable</h1>
    </Container>
    <Table responsive="md" bordered hover variant="primary">
    <thead>
      <tr>
        <th>Name</th>
        <th>Day & Time</th>
        <th>Level</th>
        <th>Location</th>
        <th>Cost</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1. Example Name</td>
        <td>Example Day & Time</td>
        <td>Example Level</td>
        <td>Example Location</td>
        <td>Example Cost</td>
      </tr>
      </tbody>
    </Table>
  </Layout>
  )
}