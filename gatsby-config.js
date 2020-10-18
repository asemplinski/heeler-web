/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Heeler Consulting',
    menuLinks: [
      {
        name: 'Home',
        link:'/',
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Services',
        link:'/services'
      },
      {
        name: "Contact",
        link: '/contact'
      }
    ]
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `${__dirname}/src`,
        name: 'src'
      } 
    },
  ],
}
