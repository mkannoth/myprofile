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
        margin: '10',
        maxWidth: '100%',
        padding: '1.45rem 1.0875rem',
      }}
    >
    <div
      style={{
        display: 'inline-block'
      }}
    >
    <h2 style={{ margin: 0, display: 'inline-block'}}>
       <Link
         to="/"
         style={{
           color: 'white',
           textDecoration: 'none',
         }}
       >
         {siteTitle}
       </Link>
    </h2>
    </div>
    <div
         style={{
   display: 'inline-block',
   color: 'white',
   opacity: .4,
   padding: '1rem',
   transition: 'all .2s ease-in-out'
         }}
       >
   <Link style={{'padding-left': '45rem',color:'yellow','text-decoration': 'none'  }} to="/">About</Link>
   <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/work/">Work</Link>
   <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/skills/">Skills</Link>
   <Link style={{'padding-left': '2em',color:'yellow','text-decoration': 'none' }} to="/contact/">Contact</Link>
       </div>

    </div>
  </div>
)

export default Header
