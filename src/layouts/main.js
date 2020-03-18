import React from "react"
import { Helmet } from 'react-helmet'

import Theme from '../themes'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

export const MainLayout = ({ children, hero, transparentNav, enableDarkMode }) => {


	return (
		<Theme transparentNav={transparentNav}>
			<Helmet>
				<meta charset="utf-8"></meta>
			</Helmet>
			<Nav transparentNav={transparentNav} />
			{children}
			<Footer />
		</Theme>
	)
}
