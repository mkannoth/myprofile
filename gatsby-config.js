const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Mithun Kannoth',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typography',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mithun Kannoth',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
