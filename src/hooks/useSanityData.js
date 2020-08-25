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
          aboutImage {
            asset {
              fluid {
                src
              }
            }
          }
          aboutImageCaption
        }
        allSanityDances(sort: { fields: _createdAt }) {
          edges {
            node {
              id
              title
              choreographer
              songartist
              level
              youtube
              file {
                asset {
                  path
                }
              }
            }
          }
        }
        allSanityTimetable(sort: { fields: _createdAt }) {
          edges {
            node {
              id
              title
              day
              timeStart
              timeEnd
              location
              level
              cost
            }
          }
        }
      }
    `
  )
  return sanity
}
