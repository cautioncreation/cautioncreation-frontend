import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { CartoonHero } from '../components/hero'
import { CallToAction } from '../components/callToAction'

const BrandingAndDesignPage = ({ theme, data }) => (
	<Layout>
		<Helmet>
			<title>Development Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<CartoonHero
			subtitle="Branding & Design Services"
			title="We can build something that truly reflects you!"
			src={data.heroImage.publicURL}
		/>
		<CallToAction />
	</Layout>
)

export default BrandingAndDesignPage

export const query = graphql`
  query brandingAndDesignPageQuery {
		heroImage:file(relativePath: { eq: "svg/undraw_designer_life.svg" }) {
      publicURL
    }
  }
`
