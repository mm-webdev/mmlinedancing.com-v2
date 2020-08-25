import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

export default function Timetable() {
  const timetables = useSanityData().allSanityTimetable.edges
  console.log(JSON.stringify({timetables}));
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
      {timetables.map((timetable) => {
      return <tr>
        <td>{timetable.node.title}</td>
        <td>{timetable.node.day}, {timetable.node.timeStart} to {timetable.node.timeEnd}</td>
        <td>{timetable.node.level}</td>
        <td>{timetable.node.location}</td>
        <td>{timetable.node.cost}</td>
      </tr>
      })}
      </tbody>
    </Table>
  </Layout>
  )
}