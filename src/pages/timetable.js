import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import CardColumns from "react-bootstrap/CardColumns"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

export default function Timetable() {
  const timetables = useSanityData().allSanityTimetable.nodes
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Class List</h1>
      </Container>
      <CardColumns>
        {timetables.map(scheduledClass => {
          const dateValue = scheduledClass._updatedAt.toLocaleString()
          const classTimes = scheduledClass.scheduledDayAndTime
          return (
            <Card className="mb-2">
              <Card.Header className="text-white bg-primary">
                <Card.Title className="font-weight-bolder">
                  {scheduledClass.title}
                </Card.Title>
              </Card.Header>
              <Card.Body className="p-0">
                <Card.Text className="p-3 mb-0 lead">
                  Level: {scheduledClass.level}
                  <br />
                  Cost: {scheduledClass.cost}<br />
                  Location: {scheduledClass.location}
                </Card.Text>
                <ListGroup className="p-0 text-center" variant="flush">
                  {classTimes.map(classDayAndTimeListing => {
                    return (
                      <ListGroup.Item variant="primary" className="py-1 px-3">
                        {classDayAndTimeListing.day} ({" "}
                        {classDayAndTimeListing.opensAt} to{" "}
                        {classDayAndTimeListing.closesAt})
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
                <Card.Text className="p-3 lead">
                
                  {scheduledClass.notes}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Last updated on {dateValue}
                </small>
              </Card.Footer>
            </Card>
          )
        })}
      </CardColumns>
    </Layout>
  )
}
