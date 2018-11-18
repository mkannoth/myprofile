import React from 'react'
import { Link,graphql } from 'gatsby'
//import { Collapse,NavbarToggler,Navbar,Nav,NavItem,NavLink,NavbarBrand } from 'reactstrap'
//import '../../node_modules/jquery/dist/jquery.slim.min.js'
//import '../../node_modules/popper.js/dist/popper.min.js'
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { Navbar,NavbarToggler,Collapse,Nav,NavItem,NavLink} from 'reactstrap'



class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    return (
    <div style={{'background-color':'rgb(183, 50, 56)','z-index':'1','width':'100%'}}>

        <Navbar color="faded" light expand="sm">
        <a style={{'display': 'inline-block',
      'padding-top': '.3125rem',
      'padding-bottom': '.3125rem',
      'margin-right': '1rem',
      'font-size': '1.25rem',
      'line-height': 'inherit',
      'white-space': 'nowrap',
      'color': 'white'}} href="/">Mithun Kannoth</a>
        <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
           <Nav className="ml-auto" navbar>
                 <NavItem>
                      <NavLink href="/">About</NavLink>
                 </NavItem>
                 <NavItem>
                      <NavLink href="/">Contact</NavLink>
                 </NavItem>
                 <NavItem>
                 </NavItem>
           </Nav>
           </Collapse>
         </Navbar>
         </div>
    )
  }
}



export default Header
