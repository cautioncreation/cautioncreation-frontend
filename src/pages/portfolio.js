import React from "react"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { Header } from '../components/header'

const portfolioPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<Header title="Our Portfolio" />
	</Layout>
)

export default portfolioPage
