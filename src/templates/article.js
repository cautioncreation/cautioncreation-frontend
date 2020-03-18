import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { BlogLayout } from '../layouts/blog'
import { ArticleHeader } from '../components/articleHeader'
import { ArticleContent } from '../components/articleContent'

export const query = graphql`
  query ArticleTemplateQuery($id: String! $username: String!) {
    strapiArticle(strapiId: { eq: $id }) {
      title
      content
      image {
				childImageSharp {
	        fluid(quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
      }
			alt
    }
		strapiUser(username: { eq: $username}) {
			name
			avatar {
				childImageSharp {
					fluid {
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
				<title>{data.strapiArticle.title}</title>
				<meta name="description" content={data.strapiArticle.meta}></meta>
			</Helmet>
			<ArticleHeader data={data.strapiArticle} author={data.strapiUser} />
			<ArticleContent data={data.strapiArticle} />
		</BlogLayout>
  )
}

export default ArticleTemplate
