import React, { useState } from "react"
import { Helmet } from 'react-helmet'

import Theme from '../themes/Theme'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

const Layout = ({ children, hero, transparentNav }) => {
	const [isDarkMode, setDarkMode] = useState(false)


	return (
		<Theme transparentNav={transparentNav} isDarkMode={isDarkMode}>
			<Helmet>
				<meta charset="utf-8"></meta>
			</Helmet>
			<Nav transparentNav={transparentNav} isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
			{children}
			<Footer />
		</Theme>
	)
}


export default Layout
