import React from "react"
import { Helmet } from "react-helmet"
// import { useSanityData } from "../hooks/useSanityData"

// const sanitySettings = useSanityData().sanitySettings

class SiteMeta extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MM Line Dancing</title>
          {/* <base href="https://mmlinedancing.com/index.html" /> */}
          {/* <meta name="theme-color" content={sanitySettings.colorMain.hex} /> */}
          {/* <style type="text/scss">{`$primary:${sanitySettings.colorMain.hex};`}</style> */}
        </Helmet>
      </div>
    )
  }
}

export default SiteMeta
