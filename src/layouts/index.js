import React from "react"
import { Helmet } from 'react-helmet'

import Theme from '../themes/Theme'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

const Layout = ({ children, hero, path }) => (
	<Theme path={path}>
		<Helmet>
			<meta charset="utf-8"></meta>
		</Helmet>
		<Nav fade={hero}/>
		{children}
		<Footer />
	</Theme>
)


export default Layout
