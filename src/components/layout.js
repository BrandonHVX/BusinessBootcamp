



/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Navbar,Nav, NavDropdown, Container } from "react-bootstrap"
 import Header from "./header"
 

 import "./App.scss"
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 
 const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
    
      >
        <main>{children}</main>
        <footer
    
        >
          © {new Date().getFullYear()} &middot; District 9 Small Business Bootcamp
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
