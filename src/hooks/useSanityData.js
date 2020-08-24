import { useStaticQuery, graphql } from "gatsby"

export const useSanityData = () => {
  const sanity = useStaticQuery(
    graphql`
      query SanityData {
        sanitySettings(_id: {eq: "settings"}) {
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
        }
        sanityTimetable {
          title
          day
          timeStart
          timeEnd
          level
          location
          cost
        }
        sanityDances {
          title
          songartist
          level
          choreographer
          youtube
          file {
            asset {
              path
            }
          }
        }
      }
    `
  )
  return sanity
}
