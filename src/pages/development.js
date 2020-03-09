import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { CartoonHero } from '../components/hero'
import { DevelopmentServices } from '../components/developmentServices'

const developmentPage = ({ theme, data }) => (
	<Layout>
		<Helmet>
			<title>Development Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<CartoonHero
			subtitle="Development Services"
			title="Businesses big or small, we develop them all!"
			src={data.heroImage.publicURL}
		/>
		<DevelopmentServices />

	</Layout>
)

export default developmentPage

export const query = graphql`
  query developmentPageQuery {
		heroImage:file(relativePath: { eq: "svg/undraw_feeling_proud.svg" }) {
      publicURL
    }
  }
`
