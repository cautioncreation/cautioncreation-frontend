import React, { useState, useLayoutEffect } from "react"

import { NavMenu } from '../navMenu'
import Logo from "../../images/svg/logo.svg"

import {
	StyledNav,
	StyledBrand,
	StyledLogo,

} from './style'

export const Nav = ({ transparentNav }) => {
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
		<StyledNav scrollPosition={scrollPosition} transparentNav={transparentNav}>
			<StyledBrand href="/">
				<StyledLogo src={Logo} alt="Logo"/>
			</StyledBrand>
			<NavMenu />
		</StyledNav>
	)
}
