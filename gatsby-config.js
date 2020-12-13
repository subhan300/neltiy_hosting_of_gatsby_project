/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// module.exports = {
//   /* Your site config here */
//   plugins: [],
// }

// In your gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uwpnje3q7eie`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:"PILg_T9amsekQHGd1dZmeQEs46xKBejPMlUEvB2OO08" ,
      },
    },
  ],
}