/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/*/

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import SEO from "../seo"
// import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      {/* <SEO title="Hack The Ratio digital marketing solutions" /> */}
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
