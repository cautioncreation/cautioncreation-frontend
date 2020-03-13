import React, { useState, useEffect } from 'react'


import {
	StyledToggleContainer,
	StyledToggle,
} from './style'

export const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState(typeof window !== 'undefined' && window.localStorage.getItem('isDarkMode'))

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
		<StyledToggleContainer>
			<StyledToggle active={isDarkMode} onClick={() => handleClick()}/>
		</StyledToggleContainer>
	)
}
