import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgb(102, 130, 153)',
      marginBottom: '1.45rem',
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
   <Link style={{'padding-left': '45rem'}} to="/about/">About</Link>
   <Link style={{'padding-left': '1em'}} to="/work/">Work</Link>
   <Link style={{'padding-left': '1em'}} to="/skills/">Skills</Link>
   <Link style={{'padding-left': '1em'}} to="/contact/">Contact</Link>
       </div>

    </div>
  </div>
)

export default Header
