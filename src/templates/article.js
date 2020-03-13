import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { BlogLayout } from '../layouts/blog'
import { ArticleHeader } from '../components/articleHeader'
import { ArticleContent } from '../components/articleContent'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    strapiArticle(strapiId: { eq: $id }) {
			author {
				username
			}
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
  return (
		<BlogLayout>
			<Helmet>
				<title>About | Caution Creation</title>
				<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
			</Helmet>
			<ArticleHeader data={data.strapiArticle} />
			<ArticleContent data={data.strapiArticle} />
		</BlogLayout>
  )
}

export default ArticleTemplate
