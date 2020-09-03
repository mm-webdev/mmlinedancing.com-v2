import { useStaticQuery, graphql } from "gatsby"

export const useSanityData = () => {
  const sanity = useStaticQuery(
    graphql`
      query SanityData {
        sanitySettings(_id: { eq: "settings" }) {
          colorMain {
            hex
          }
          favicon {
            asset {
              path
            }
          }
          logo {
            asset {
              fluid {
                src
              }
            }
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
          aboutImage {
            asset {
              fluid {
                src
              }
            }
          }
          aboutImageCaption
          aboutBlurb {
            _key
            _type
            style
            list
            _rawChildren
            children {
              _key
              _type
              text
            }
          }
        }
        allSanityTimetable {
          edges {
            node {
              id
            }
          }
          nodes {
            _key
            _rawScheduledDayAndTime
            _type
            _rev
            _createdAt
            _id
            _updatedAt
            cost
            id
            level
            location
            notes
            scheduledDayAndTime {
              _key
              _type
              closesAt
              day
              opensAt
            }
            title
          }
        }
        allSanityDances {
          edges {
            node {
              id
              choreographer
              level
              songartist
              title
              file {
                asset {
                  path
                  url
                  title
                  source {
                    _key
                    _type
                    id
                    name
                    url
                  }
                  size
                  sha1hash
                  originalFilename
                  mimeType
                  label
                  id
                  extension
                  description
                  assetId
                  _updatedAt
                  _type
                  _rev
                  _rawSource
                  _key
                  _id
                  _createdAt
                }
                _key
                _rawAsset
                _type
              }
              _id
              _key
              _createdAt
              _rawFile
              _updatedAt
              youtube
            }
          }
        }
      }
    `
  )
  return sanity
}
