import React from "react"
import { useSanityData } from "../hooks/useSanityData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { library } from "../fontawesome"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

// Importing componants
import Layout from "../componants/layout"

export default function Dances() {
  const dances = useSanityData().allSanityDances.nodes
  return (
    <Layout>
      <Container as="heading">
        <h1 className="text-center">Dances</h1>
      </Container>
      <Container>
        <Row className="dance-steps-th">
          <Col>Dance Name</Col>
          <Col>Choreographer</Col>
          <Col>Level</Col>
          <Col>Song & Artist</Col>
          <Col>Content Links</Col>
        </Row>
        {dances.map(danceSheet => {
          let file,
            youtube = null
          let contentJoin = " / "
          if (danceSheet.file != null) {
            file = (
              <a href={danceSheet.file.asset.url} target="_blank">
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            )
          }
          if (danceSheet.youtube != null) {
            youtube = (
              <a href={danceSheet.youtube} target="_blank">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            )
          }
          if (file == null || youtube == null) {
            contentJoin = ""
          }
          return (
            <Row className="dance-steps-td">
              <Col md>
                <span className="dance-steps-tags">Dance Name: </span>
                {danceSheet.title}
              </Col>
              <Col md>
                <span className="dance-steps-tags">Choreographer: </span>
                {danceSheet.choreographer}
              </Col>
              <Col md>
                <span className="dance-steps-tags">Level: </span>
                {danceSheet.level}
              </Col>
              <Col md>
                <span className="dance-steps-tags">Song & Artist: </span>
                {danceSheet.songartist}
              </Col>
              <Col md>
                <span className="dance-steps-tags">Content Links: </span>
                {file}
                {contentJoin}
                {youtube}
              </Col>
            </Row>
          )
        })}
      </Container>
    </Layout>
  )
}
