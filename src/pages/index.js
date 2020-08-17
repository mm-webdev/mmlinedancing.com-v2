import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// Importing componants
import Layout from '../componants/layout';

const index = () => (
  <Layout>
       <Image src="images\mmlinedancing-logo.png" alt="Logo" className="mx-auto d-block" />
  <Container className="text-center">
    <h1>Line dance classes with Michelle<br />
    <small class="text-muted">All levels welcome. No dance experience or partners necessary.</small></h1>
    </Container>
  </Layout>
);

export default index;