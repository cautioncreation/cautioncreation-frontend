import React from "react"

import Theme from '../themes/Theme'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

const Layout = ({ children }) => (
	<Theme>
		<Nav fade/>
		{children}
		<Footer />
	</Theme>
)


export default Layout
