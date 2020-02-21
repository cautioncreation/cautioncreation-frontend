import React, { useState, useLayoutEffect } from "react"

import { NavMenu } from '../navMenu'
import Logo from "../../images/svg/logo.svg"

import {
	StyledNav,
	StyledBrand,
	StyledLogo,
	StyledBrandName,

} from './style'

export const Nav = () => {
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
		<StyledNav scrollPosition={scrollPosition}>
			<StyledBrand href="/">
				<StyledLogo src={Logo} alt="Logo"/>
			</StyledBrand>
			<NavMenu />
		</StyledNav>
	)
}
