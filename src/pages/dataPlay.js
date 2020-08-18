import React from "react"

// Importing the Bootstrap CSS created with Themestr.app
import "../stylesheets/theme.scss"

// Importing componants
import Layout from "../componants/layout"

// Importing Data
import DataSettings from "../queries/settings"

const dataPlay = () => (
  <Layout>
    <DataSettings />
  </Layout>
)

export default dataPlay
