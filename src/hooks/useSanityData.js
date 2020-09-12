import { useStaticQuery, graphql } from "gatsby";

export const useSanityData = () => {
  const sanity = useStaticQuery(
    graphql`
      query SanityData {
        allSanitySettings(filter: { _id: { eq: "settings" } }) {
          nodes {
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
              display
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
        }
        allSanityTimetable {
          edges {
            node {
              id
            }
          }
          nodes {
            _updatedAt(formatString: "DD MMM YYYY")
            cost
            id
            level
            location
            notes
            scheduledDayAndTime {
              closesAt
              day
              opensAt
            }
            title
          }
        }
        allSanityDances {
          nodes {
            file {
              asset {
                url
                originalFilename
              }
            }
            choreographer
            level
            songartist
            title
            youtube
          }
        }
      }
    `
  );
  return sanity;
};
