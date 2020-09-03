import React from "react";
import { useSanityData } from "../hooks/useSanityData";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardColumns from 'react-bootstrap/CardColumns'

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss";

// Importing componants
import Layout from "../componants/layout";

export default function Timetable() {
  const timetables = useSanityData().allSanityTimetable.nodes;
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Class List</h1>
      </Container>
      <CardColumns>
        {timetables.map((scheduledClass) => {
          const dateValue = scheduledClass._updatedAt.toLocaleString();
          const classTimes = scheduledClass.scheduledDayAndTime;
          return (
            <Card className="mb-3">
            <Card.Header bg="primary">
            <Card.Title className="font-weight-bolder align-right">{scheduledClass.title}
                </Card.Title>
            </Card.Header>
              <Card.Body >
                
                <Card.Subtitle>Level: {scheduledClass.level}</Card.Subtitle>
                <Card.Text>
                  Cost: {scheduledClass.cost}
                  
                </Card.Text>
                <ListGroup className="list-group-flush text-center" >
                {classTimes.map((classDayAndTimeListing) => {
                  return (
                    <ListGroup.Item>
                      {classDayAndTimeListing.day} ({" "}
                      {classDayAndTimeListing.opensAt}
                      {" "}to {classDayAndTimeListing.closesAt})
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
                
              
              </Card.Body>
              
              <Card.Footer variant="primary">
                <small className="text-muted">
                  Last updated on {dateValue}
                </small>
              </Card.Footer>
              
            </Card>
          );
        })}
      </CardColumns>
    </Layout>
  );
}
