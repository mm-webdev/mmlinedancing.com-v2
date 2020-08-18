import React from "react"
import { StaticQuery, graphql } from "gatsby"

const dataSettings = () => (
  <StaticQuery
    query={graphql`
      {
        allSanitySettings {
          nodes {
            aboutBlurb {
              _key
              _type
              style
              list
              _rawChildren
            }
            aboutImage {
              _key
              _type
              _rawAsset
              _rawHotspot
              _rawCrop
            }
            aboutImageCaption
            colorMain {
              _key
              _type
              hex
              alpha
              _rawHsl
              _rawHsv
              _rawRgb
            }
            favicon {
              _key
              _type
              _rawAsset
              _rawHotspot
              _rawCrop
            }
            logo {
              _key
              _type
              _rawAsset
              _rawHotspot
              _rawCrop
            }
            nav {
              _key
              _type
              name
              path
              hide
            }
            socials {
              _key
              _type
              title
              url
              facode
            }
            title
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default dataSettings