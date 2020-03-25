import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { BlogLayout } from '../layouts/blog'
import { ArticleHeader } from '../components/articleHeader'
import { ArticleContent } from '../components/articleContent'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
			frontmatter {
				image {
					childImageSharp {
		        fluid(quality: 100) {
		          ...GatsbyImageSharpFluid
		        }
		      }
	      }
				title
				author
				date
			}
	    html
    }
  }
`

const ArticleTemplate = ({ data }) => {
  return (
		<BlogLayout>
			<Helmet>
				<title>{data.markdownRemark.frontmatter.title}</title>
				<meta name="description" content={data.markdownRemark.frontmatter.meta}></meta>
			</Helmet>
			<ArticleHeader data={data.markdownRemark.frontmatter}/>
			<ArticleContent data={data.markdownRemark.html} />
		</BlogLayout>
  )
}

export default ArticleTemplate
