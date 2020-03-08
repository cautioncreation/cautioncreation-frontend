import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import { Helmet } from 'react-helmet'

import Layout from "../layouts"
import { Article } from '../components/article'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      image {
				childImageSharp {
	        fluid(quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
      }
    }
  }
`

const ArticleTemplate = ({ data }) => {
  const article = data.strapiArticle
  return (
		<Layout>
			<Helmet>
				<title>About | Caution Creation</title>
				<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
			</Helmet>

      <Image
        fluid={article.image.childImageSharp.fluid}
				alt="hello"
      />
      <h1>{article.title}</h1>

			<Article data={article.content} />
		</Layout>
  )
}

export default ArticleTemplate
