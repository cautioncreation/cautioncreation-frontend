import React, { useState } from "react"

import { Button } from '../button'
import { MenuIcon } from '../menuIcon'
import { NavDropdown, NavDropdownLink } from '../navDropdown'
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
			<MenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<StyledMenu className={activeClass} >
				<StyledLink href="/about">About</StyledLink>
				<NavDropdown title="Services">
					<NavDropdownLink href="/development">Development</NavDropdownLink>
					<NavDropdownLink href="/maintenance">Maintenance</NavDropdownLink>
					<NavDropdownLink href="/branding-and-design">Branding and Design</NavDropdownLink>
				</NavDropdown>
				<StyledLink href="/portfolio">Portfolio</StyledLink>
				<StyledLink href="/contact">Contact</StyledLink>
				<StyledButtonContainer>
					<Button outline pill lightBlue href="/contact">Get Started</Button>
				</StyledButtonContainer>
			</StyledMenu>
		</StyledContainer>

	)
}
