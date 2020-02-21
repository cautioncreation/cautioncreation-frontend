import React, { useState } from "react"

import { Button } from '../button'
import { MenuIcon } from '../menuIcon'
import {
	StyledContainer,
	StyledMenu,
	StyledLink,
	StyledButtonContainer
} from './style'

export const NavMenu = (props) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	let activeClass = (isMenuOpen ? "active" : null)

	return (
		<StyledContainer>
			<MenuIcon  onClick={() => setMenuOpen(!isMenuOpen)}/>
			<StyledMenu className={activeClass} >
				<StyledLink href="/about">About</StyledLink>
				<StyledLink href="/services">Services</StyledLink>
				<StyledLink href="/portfolio">Portfolio</StyledLink>
				<StyledLink href="/contact">Contact</StyledLink>
				<StyledButtonContainer>
					<Button outline pill href="/contact#quote">Get Started</Button>
				</StyledButtonContainer>
			</StyledMenu>
		</StyledContainer>

	)
}
