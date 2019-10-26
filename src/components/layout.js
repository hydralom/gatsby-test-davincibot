import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"

import Header from "./header"
import Footer from "./footer"
import "../style/index.scss"
import Sidebar from "./Sidebar"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            crossOrigin="anonymous"/>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md='8'>{children}</Col>
          <Col md='4'>
            <Sidebar author={postAuthor} authorFluid={authorImageFluid}/>
          </Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
