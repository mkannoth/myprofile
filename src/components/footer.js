import React from 'react'
import '../styles/footer.css'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import { Container,Row,Col,Nav,NavItem,NavLink} from 'reactstrap'

const Footer = ({ children })=>(

<div className="footer">
  <Container>
    <Row>
    <Col>Copyright &#169; 2018</Col>
    <Col>
        <a href="https://www.facebook.com/mithun.kannoth.1" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="https://www.linkedin.com/in/mithunkannoth" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-twitter"></a>
      </Col>
    </Row>
  </Container>

</div>

)

export default Footer
