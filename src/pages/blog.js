import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { BlogLayout } from '../layouts/blog'
import { BlogHeader } from '../components/blogHeader'


const BlogPage = ({ data }) => {
  return (
		<BlogLayout>
			<Helmet>
				<title>About | Caution Creation</title>
				<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
			</Helmet>
			<BlogHeader />
		</BlogLayout>
  )
}

export default BlogPage
/*
export const query = graphql`
  query BlogPageQuery($id: String!) {
    allStrapiArticle {

    }
  }
`
*/
