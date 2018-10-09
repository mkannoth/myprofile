import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgb(85, 108, 127)',
    }}
  >
    <div
         style={{
   opacity: .8,
   'margin-left': '1%',
   padding: '3%'
         }}
       >
       <div
            style={{
                'font-size': '170%',
                'margin-right': '40%',
                'font-family': 'georgia'
            }}
          >
          <Link style={{'padding-left': '',color:'white','text-decoration': 'none'  }} to="/">Mithun Kannoth</Link>
          </div>

          <div
               style={{
                 'margin-top': '-2%',
                 'padding-left': '30%'
               }}
             >
       <Link style={{'padding-left': '65%',color:'yellow','text-decoration': 'none'  }} to="/">About</Link>
       <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/work/">Work</Link>
       <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/skills/">Skills</Link>
       <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/contact/">Contact</Link>
       </div>
   </div>
  </div>
)

export default Header
