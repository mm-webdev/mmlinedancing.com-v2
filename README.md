# Project README

## Requirements

- Static Site Builder: [Gatsby.js](https://www.gatsbyjs.org/docs/) (React.js)
- CMS: [Sanity.io](https://www.sanity.io/)
- Build Preview Server: [Gatsby Cloud](https://www.gatsbyjs.com/)
- Deployed: [Netlify](https://app.netlify.com/)
- DNS: IONOS.com (routed through Netlify for advanced DNS config)

## CMS setup

Sanity.io has a Gatsby plugin, which is used in this project to help the import of data from the sanity.io based CMS to the Gatsby deployed website.

In the gatsby-config.js file, you will see that this plugin is listed, and that the required data are environment variables. This has been setup as per the instructions found here: [Github - sanity-io/gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity#using-env-variables).

You will need a .env file created in the root directory, with the following 3 variables:

```.env
SANITY_PROJECT_ID=abc123
SANITY_DATASET=production
SANITY_TOKEN=my-super-secret-token
```

All 3 variables can be found in your sanity.io dashboard.

## Additional setup

I am using 2 sanity datasets, which can be setup in the sanity.io dashboard.

| Environment | Dataset |
| ----------- | ------- |
| Production  | `live`  |
| Development | `dev`   |

## Files & directories

**`gitignore`**

**Source JS files**

**CSS/SASS files**

## Hacks/Kludges

<!-- 1. **Hack/kludge name**
	Short description of what was done and why, including any reference links

	- **When:** date
	- **File(s):**

	  - Line #N in `[path to file]`
	  - Line #N in `[path to file]` -->

## Credits <a name="credits"></a>

- Built & designed by Bianca Wilkinson for MM Line Dancing.
- Readme file template from [Block81.com](https://block81.com/blog/a-readme-for-simple-websites).
