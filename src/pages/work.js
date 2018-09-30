import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WorkPage = () => (
  <Layout>
    <h1>Hi from the WorkPage</h1>
    <p>Welcome to WorkPage</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
