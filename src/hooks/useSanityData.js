import { useStaticQuery, graphql } from "gatsby"

export const useSanityData = () => {
  const sanity = useStaticQuery(
    graphql`
      query mmlinedancing {
        sanitySettings(_id: { eq: "settings" }) {
          title
          logo {
            asset {
              fluid {
                src
              }
            }
          }
          frontpagematter {
            style
            list
            children {
              text
              _key
              _type
            }
            _key
            _type
          }
          favicon {
            asset {
              url
            }
          }
          colorMain {
            hex
          }
          nav {
            name
            path
            display
          }
          socials {
            title
            url
            facode
          }
          aboutImage {
            asset {
              fluid {
                src
              }
            }
          }
          aboutImageCaption
          aboutBlurb {
            children {
              text
              marks
              _key
              _type
            }
            list
            style
            _key
            _type
          }
        }
        allSanityTimetable {
          nodes {
            title
            scheduledDayAndTime {
              day
              opensAt
              closesAt
            }
            level
            cost
            location
            notes
            _updatedAt(fromNow: true)
          }
        }
        allSanityDances {
          nodes {
            title
            choreographer
            songartist
            level
            file {
              _key
              _type
              asset {
                url
              }
            }
            youtube
          }
        }
      }
    `
  )
  return sanity
}
