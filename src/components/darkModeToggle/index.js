import React, { useState, useEffect } from 'react'


import {
	StyledToggleContainer,
	StyledToggle,
} from './style'

export const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState(window.localStorage.getItem('isDarkMode'))
	var event = document.createEvent("Event");
	event.initEvent("storage", true, true);

	const handleClick = () => {
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
		if(window.localStorage.getItem('isDarkMode') === null) {
			window.localStorage.setItem('isDarkMode', 'false')
			setDarkMode('false')
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
