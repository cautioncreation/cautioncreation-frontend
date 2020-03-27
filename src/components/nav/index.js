import React, { useState, useLayoutEffect } from "react"

import { NavMenu } from './navMenu'
import Logo from "../../images/svg/logo.svg"

import * as S from './style'

export const Nav = ({ transparentNav, isDarkMode, setDarkMode }) => {
	const [scrollPosition, setScrollPosition] = useState(0)

	function handleScrollPosition() {
		setScrollPosition(window.scrollY)
	}

	useLayoutEffect(() => {
		window.addEventListener('scroll', handleScrollPosition)

		return function cleanup() {
			window.removeEventListener('scroll', handleScrollPosition)
		}
	})

	return (
		<S.Nav scrollPosition={scrollPosition} transparentNav={transparentNav}>
			<S.Brand href="/">
				<S.Logo src={Logo} alt="Logo"/>
			</S.Brand>
			<NavMenu />
		</S.Nav>
	)
}
