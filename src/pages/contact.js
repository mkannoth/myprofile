import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Hi from the ContactPage</h1>
    <p>Welcome to ContactPage</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
