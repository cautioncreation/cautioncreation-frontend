import React, { useState, useEffect } from "react"
import { Helmet } from 'react-helmet'

import Theme from '../themes'
import { BlogNav } from '../components/blogNav'
import { Footer } from '../components/footer'

export const BlogLayout = ({ children, hero, transparentNav }) => {
	const [isDarkMode, setDarkMode] = useState()

	useEffect(() => {
		setDarkMode(window.localStorage.getItem('isDarkMode'))

		window.addEventListener('storage', () => {
			if(window.localStorage.getItem('isDarkMode') === 'true') {
				setDarkMode('true')
			}
			else {
				setDarkMode('false')
			}
		})
	}, [])


	return (
		<Theme transparentNav={transparentNav} isDarkMode={isDarkMode}>
			<Helmet>
				<meta charset="utf-8"></meta>
			</Helmet>
			<BlogNav transparentNav={transparentNav} />
			{children}
			<Footer />
		</Theme>
	)
}
