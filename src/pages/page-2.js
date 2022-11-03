import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = (props) => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    {this.props.name}
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
