import React from "react"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

const fourOhFour = () => (
  <Layout>
    <h1 className="display-3">
      You have reached an error page. Please choose another adventure from the
      navigation menu.
    </h1>
  </Layout>
)

export default fourOhFour
