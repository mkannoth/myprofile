import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import Footer from './footer'
import '../styles/layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Mithun Kannoth' },
            { name: 'keywords', content: 'Entrepreneur, Software Engineer' },
          ]}

          link={[
            {
              rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            },{
              rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',integrity:'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO', crossorigin:'anonymous'
            }
          ]}

        >
          <html lang="en" />

        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        <Footer/>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
