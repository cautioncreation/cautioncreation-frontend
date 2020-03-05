import React from "react"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { MaintenancePackages } from '../components/maintenancePackages'

const maintenancePage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<MaintenancePackages />
	</Layout>
)

export default maintenancePage
