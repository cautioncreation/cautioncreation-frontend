import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as S from './style'

export const DarkModeToggle = () => {
	const data = useStaticQuery(graphql`
		query darkModeToggleQuery {
			Sun: file(relativePath: {eq: "svg/sun.svg"}) {
				publicURL
			}
			Moon: file(relativePath: {eq: "svg/moon.svg"}) {
				publicURL
			}
		}
	`)
	const [isDarkMode, setDarkMode] = useState()

	const handleClick = () => {
		var event = document.createEvent("Event");
		event.initEvent("storage", true, true);

		if(window.localStorage.getItem('isDarkMode') === 'true') {
			window.localStorage.setItem('isDarkMode', 'false')
			setDarkMode('false')

      window.dispatchEvent(event);
		}
		else {
			window.localStorage.setItem('isDarkMode', 'true')
			setDarkMode('true')

      window.dispatchEvent(event);
		}
	}

	useEffect(() => {
		setDarkMode(window.localStorage.getItem('isDarkMode'))

		if(window.localStorage.getItem('isDarkMode') === null) {
			window.localStorage.setItem('isDarkMode', 'false')
			setDarkMode('false')
		}
		else {
			if(window.localStorage.getItem('isDarkMode') === 'true') {
				setDarkMode('true')
			}
			else {
				setDarkMode('false')
			}
		}
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
		<S.ToggleContainer title={"Enable " + (isDarkMode === "true" ? "light" : "dark") + " mode"}>
			<S.Toggle active={isDarkMode} onClick={() => handleClick()} aria-label="Toggle Dark Mode">
				<S.ToggleIcon active={isDarkMode}>
					<S.ToggleImage src={(isDarkMode === "true" ? data.Moon.publicURL : data.Sun.publicURL)} alt={(isDarkMode === "true" ? "Moon Icon" : "Sun Icon")}/>
				</S.ToggleIcon>
			</S.Toggle>
		</S.ToggleContainer>
	)
}
