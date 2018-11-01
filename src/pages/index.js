import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = (props) => (
  <Layout>
  <div style={{position: 'relative'}}>
    <Img
    style={{position: 'relative'}}
          fluid={props.data.file.childImageSharp.fluid}/>
    <div style={{top: '35px',position: 'absolute','margin-top': '-1%','margin-left': '4%'}}>
      <h3>Consultant, Entrepreneur & Freelancer</h3>
      <p>Watch for this space</p>
      <p>Updating Soon!!</p>
    </div>
  </div>
  </Layout>

)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { regex: "/Mithun-copy-2/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
