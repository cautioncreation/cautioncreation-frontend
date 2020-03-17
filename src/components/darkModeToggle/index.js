import React, { useState, useEffect } from 'react'

import MoonIcon from '../../images/svg/moon.svg'
import SunIcon from '../../images/svg/sun.svg'

import {
	StyledToggleContainer,
	StyledToggle,
	StyledToggleIcon,
	StyledToggleImage,
} from './style'

export const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState()

	const handleClick = () => {
		if(window.localStorage.getItem('isDarkMode') === 'true') {
			window.localStorage.setItem('isDarkMode', 'false')
			setDarkMode('false')

			var event = document.createEvent("Event");
			event.initEvent("storage", true, true);
      window.dispatchEvent(event);
		}
		else {
			window.localStorage.setItem('isDarkMode', 'true')
			setDarkMode('true')

			var event = document.createEvent("Event");
			event.initEvent("storage", true, true);
      window.dispatchEvent(event);
		}
	}

	useEffect(() => {
		setDarkMode(window.localStorage.getItem('isDarkMode'))

		if(window.localStorage.getItem('isDarkMode') === null) {
			window.localStorage.setItem('isDarkMode', 'true')
			setDarkMode('true')
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
		<StyledToggleContainer>
			<StyledToggle active={isDarkMode} onClick={() => handleClick()} aria-label="Toggle Dark Mode">
				<StyledToggleIcon active={isDarkMode}>
					<StyledToggleImage src={(isDarkMode === "true" ? MoonIcon : SunIcon)} alt={(isDarkMode === "true" ? "Moon Icon" : "Sun Icon")}/>
				</StyledToggleIcon>
			</StyledToggle>
		</StyledToggleContainer>
	)
}
