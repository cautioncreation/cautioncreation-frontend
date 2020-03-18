import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { BlogLayout } from '../layouts/blog'
import { CartoonHero } from '../components/hero'
import { BlogList } from '../components/blogList'


const BlogPage = ({ data }) => {
  return (
		<BlogLayout>
			<Helmet>
				<title>Blog | Caution Creation</title>
				<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
			</Helmet>
			<CartoonHero
				subtitle="Our Blog"
				title="Coder or owner, we have articles to help you!"
				src={data.heroImage.publicURL}
			/>
			<BlogList />
		</BlogLayout>
  )
}

export default BlogPage

export const query = graphql`
  query blogPageQuery {
		heroImage:file(relativePath: { eq: "svg/undraw_content.svg" }) {
      publicURL
    }
  }
`
