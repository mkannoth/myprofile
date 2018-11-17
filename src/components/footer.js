import React from 'react'
import '../styles/footer.css'
import { Container,Row,Col} from 'reactstrap'

const Footer = ({ children })=>(

<footer style={{'background-color':'rgba(21, 20, 20, 0.99)'}}>

    <div class="col-xs-12 py-3">
      <div class="d-flex flex-row flex-center">
          <a href="https://www.facebook.com/mithun.kannoth.1" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="https://www.linkedin.com/in/mithunkannoth" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-twitter"></a>
      </div>
    </div>

    <div class="text-center text-white py-3">Designed by Mithun Kannoth</div>

</footer>

)

export default Footer
