import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

// Importing componants
import Layout from "../componants/layout"

export default function Dances() {
  const dances = useSanityData().allSanityDances.edges
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Dances</h1>
      </Container>
      <Table responsive="md" bordered hover variant="primary">
        <thead>
          <tr>
            <th>Title</th>
            <th>Choreographer</th>
            <th>Song & Artist</th>
            <th>Level</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {dances.map(dance => {
            return (
              <tr>
                <td>{dance.node.title}</td>
                <td>
                  {dance.node.choreographer}
                </td>
                <td>{dance.node.songartist}</td>
                <td>{dance.node.level}</td>
                <td>{dance.node.youtube}<br />{dance.node.file.asset.path}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Layout>
  )
}