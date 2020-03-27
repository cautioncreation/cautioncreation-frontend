import React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { MainLayout } from '../layouts/main'
import { CartoonHero } from '../sections/hero'
import { MaintenanceParagraph } from '../sections/maintenanceParagraph'
import { Testimonials } from '../sections/testimonials'
import { MaintenancePackages } from '../sections/maintenancePackages'
import { CallToAction } from '../sections/callToAction'

const maintenancePage = ({ data }) => (
	<MainLayout>
		<Helmet>
			<title>Maintenance Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<CartoonHero
			subtitle="Maintenance Services"
			title="After development is done, it doesn't mean we are!"
			src={data.heroImage.publicURL}
		/>
		<MaintenanceParagraph />
		<Testimonials />
		<MaintenancePackages />
		<CallToAction />
	</MainLayout>
)

export default maintenancePage

export const query = graphql`
  query maintenancePageQuery {
		heroImage:file(relativePath: { eq: "svg/undraw_code_review.svg" }) {
      publicURL
    }
  }
`
