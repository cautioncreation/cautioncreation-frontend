import React from "react"

import Theme from '../themes/Theme'
import { Nav } from '../components/nav'

const Layout = ({ children }) => (
	<Theme>
		<Nav />
		{children}
	</Theme>
)


export default Layout
