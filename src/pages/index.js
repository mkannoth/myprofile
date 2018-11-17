import React from 'react'
import {graphql} from 'gatsby'
import { Button } from 'reactstrap'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'


export default ({ data }) => {
  console.log('Mithun',data)
  console.log('Kannoth',data.file.childImageSharp.fluid)
  return (
    <Layout>
      <div style={{position:'relative'}}>

            <div class="row no-gutters">
                <div class="col-lg-4 col-md-5">
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </div>
                <div class="col-lg-8 col-md-7">
                    <div class="d-flex flex-column">
                        <div style={{top: '35px','margin-top': '5%','margin-left': '4%'}}>

                          <h1 class="display-4">Hello, I &#39; m, <font color="black">Mithun Kannoth</font></h1>
                          <p class="lead">Techie, Scrum Master, Consultant based in Bangalore</p>
                          <hr class="my-4"/>

                          <main role="main" class="inner cover">
        <h4>About Me</h4>
        <p class="lead">A passionate techie with over 12 years of experience in delivering enterprise software
        solutions under various capacities such as technical consultant, onsite coordinator at client site and scrum master.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href={data.allFile.edges[0].node.publicURL} role="button" download>Download Resume</a>
        </p>
      </main>

      <span><h5>Call <font color="black">9611125450</font></h5>
      <h5>Mail <font color="black">mithkann@gmail.com</font></h5></span>
      <hr class="my-4"/>

                        </div>
                    </div>
                </div>


            </div>

            <div class="row ml-2 mt-2">
          <div class="col-md-4">
            <h4>Education</h4>
            <p>Bachelor of Engineering
            <br/>Visvesvariah Technological University
            <br/>2002-2006
            <br/>Bangalore, India</p>

          </div>
          <div class="col-md-4">
            <h4>Awards</h4>
            <p>IBM LAB SERVICES AWARD
            <br/>2015 & 2016
            <br/>IBM MANAGER’S CHOICE AWARD
            <br/>2014</p>
          </div>
          <div class="col-md-4">
            <h4>Certifications</h4>
            <p>Certified Scrum Master</p>
          </div>
        </div>




      </div>
    </Layout>
  )
}

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
allFile(filter: { relativePath: { eq: "MithunKannoth.pdf" } }){
  edges{
    node{
       publicURL
    }
  }
}

}
`
