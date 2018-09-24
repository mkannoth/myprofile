import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
  <div
      style={{
        margin: '10',
        maxWidth: 950,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <ul>
     <li>
      <span>
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
       <h3 style={{ float: 'right', display: 'inline-block', 'padding-right': 50, color: 'white' }}>
        About
       </h3>
       </span>
       </li>
       </ul>
    </div>
  </div>
)

export default Header
