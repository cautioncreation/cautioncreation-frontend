import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { MainLayout } from '../layouts/main'
import { CartoonHero } from '../sections/hero'
import { OurApproach } from '../sections/ourApproach'
import { Technologies } from '../sections/technologies'
import { DevelopmentServices } from '../sections/developmentServices'
import { CallToAction } from '../sections/callToAction'

const developmentPage = ({ theme, data }) => (
	<MainLayout>
		<Helmet>
			<title>Development Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<CartoonHero
			subtitle="Development Services"
			title="Websites big or small, we will develop them all!"
			src={data.heroImage.publicURL}
		/>
		<OurApproach />
		<Technologies />
		<DevelopmentServices />
		<CallToAction />
	</MainLayout>
)

export default developmentPage

export const query = graphql`
  query developmentPageQuery {
		heroImage:file(relativePath: { eq: "svg/undraw_feeling_proud.svg" }) {
      publicURL
    }
  }
`
