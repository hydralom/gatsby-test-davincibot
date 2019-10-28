import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const indexQuery = graphql`
    query{
        allMarkdownRemark(
            sort:{fields:[frontmatter___date],order:DESC}
            limit: 2
        ){
            totalCount
            edges{
                node{
                    id
                    frontmatter{
                        title
                        date(formatString:"MMM Do YYYY")
                        author
                        tags
                        image{
                            childImageSharp{
                                fluid(maxWidth: 500, maxHeight:300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

const ArticlesPage = () => {
  const postsPerPage = 2
  let numberOfPages

  return (
    <Layout pageTitle="DaVinciBot">
      <SEO title="Home"/>
      <StaticQuery query={indexQuery} render={data => {
        numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post title={node.frontmatter.title}
                    key={node.id}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
              />
            ))}
            <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
          </div>
        )
      }}
      />
    </Layout>
  )
}


export default ArticlesPage
