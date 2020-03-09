import React from "react"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'

const designAndSeoPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Branding and Design Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>

	</Layout>
)

export default designAndSeoPage
