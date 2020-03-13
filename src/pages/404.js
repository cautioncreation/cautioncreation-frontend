import React from "react"
import { Helmet } from 'react-helmet'

import { MainLayout } from '../layouts/main'

const NotFoundPage = () => (
  <MainLayout>
		<Helmet>
			<title>404 Not Found | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage
