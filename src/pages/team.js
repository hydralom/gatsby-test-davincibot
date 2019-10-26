import React from "react"
import { Row, Card, CardText, CardBody, CardTitle, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFuncions"
import authors from "../util/authors"
import JohnImage from "../images/john.jpg"
import JaneImage from "../images/jane.jpg"

// TODO for each author print author -> like in PaginationLinks for numbers
const TeamPage = () => (
  <Layout pageTitle="Our team">
    <SEO title="Our team"/>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JohnImage} style={{ maxWidth: "100%" }} alt="profil de john"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button color='primary' href={`/author/${slugify(authors[0].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JaneImage} style={{ maxWidth: "100%" }} alt="profil de jane"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button color='primary' href={`/author/${slugify(authors[1].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
