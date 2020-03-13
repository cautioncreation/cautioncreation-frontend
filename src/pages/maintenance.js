import React from "react"
import { Helmet } from 'react-helmet'

import { MainLayout } from '../layouts/main'
import { CartoonHero } from '../components/hero'
import { MaintenanceParagraph } from '../components/maintenanceParagraph'
import { Testimonials } from '../components/testimonials'
import { MaintenancePackages } from '../components/maintenancePackages'
import { CallToAction } from '../components/callToAction'

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
