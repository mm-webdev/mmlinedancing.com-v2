import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import CardColumns from "react-bootstrap/CardColumns"

// Importing componants
import Layout from "../componants/layout"

export default function Dances() {
  const dances = useSanityData().allSanityDances.nodes
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Dances</h1>
      </Container>
      <CardColumns>
        {dances.map(danceSheet => {
          return (
            <Card className="mb-2">
            <Card.Header className="text-white bg-primary">
                <Card.Title className="font-weight-bolder">
                  {danceSheet.title}
                </Card.Title>
              </Card.Header>
              <Card.Body className="p-0">
              <Card.Text className="p-3 mb-0 lead">
                  Level: {danceSheet.level}
                  <br />
                  Choreographer: {danceSheet.choreographer}<br />
                  Song & Artist: {danceSheet.songartist}<br />
                </Card.Text>
                <ListGroup className="p-0 text-center" variant="flush">
                
            <ListGroup.Item variant="primary" className="py-1 px-3">
              {danceSheet.youtube}
            </ListGroup.Item>
          
                </ListGroup>
              </Card.Body>
            </Card>
          )
        })}
      </CardColumns>


      {/* <Table responsive="md" bordered hover variant="primary">
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
                <td>{dance.node.choreographer}</td>
                <td>{dance.node.songartist}</td>
                <td>{dance.node.level}</td>
                <td>
                  {dance.node.youtube}
                  <br />
                  {dance.node.file.asset.path}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table> */}
    </Layout>
  )
}
