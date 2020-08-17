import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

// Importing the Bootstrap CSS created with Themestr.app
import '../stylesheets/theme.scss';

// Importing componants
import Layout from '../componants/layout';

const fourOhFour = () => (
  <Layout>
  <Jumbotron>
    <h1>You have reached an error page. Please choose another adventure from the navigation menu.</h1>
    </Jumbotron>
  </Layout>
);

export default fourOhFour;