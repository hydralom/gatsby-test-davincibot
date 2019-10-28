import React from "react"
import { Card, CardBody, CardTitle, Form, FormGroup, Input/*, Button*/ } from "reactstrap"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

const sidebarQuery = graphql`
    query sidebarQuery{
        allMarkdownRemark(
            sort:{fields:[frontmatter___date],order:DESC}
            limit:3
        ) {
            edges{
                node {
                    id
                    frontmatter{
                        title
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300, maxHeight: 500){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && ( //if author undefined -> passthrough
      <Card>
        <Img className="card-image-top" fluid={authorFluid}/>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
          <div className="author-social-links text-center">
            <ul>
              {author.facebook && author.facebook !== "" && ( //if author.facebook undefined -> passthrough
                <li>
                  <a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </a>
                </li>
              )}
              {author.twitter && author.twitter !== "" && (
                <li>
                  <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
              )}
              {author.instagram && author.instagram !== "" && (
                <li>
                  <a href={author.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              )}
              {author.linkedin && author.linkedin !== "" && (
                <li>
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your email address..."/>
          </FormGroup>
          {/*<Button className="btn btn-outline-success text-uppercase">Subscribe</Button>*/}
          <button className="btn btn-outline-success text-uppercase">Subscribe</button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img src="https://via.placeholder.com/320x200" alt="Advert" style={{ width: "100%" }}/>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery query={sidebarQuery} render={data => (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img className="card-img-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        )}/>
      </CardBody>
    </Card>
  </div>
)


export default Sidebar