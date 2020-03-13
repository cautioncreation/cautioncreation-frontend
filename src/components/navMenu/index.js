import React, { useState } from "react"

import { Button } from '../button'
import { MenuIcon } from '../menuIcon'
import { NavDropdown, NavDropdownLink } from '../navDropdown'
import {
	StyledContainer,
	StyledMenu,
	StyledToggleContainer,
	StyledToggle,
	StyledLink,
	StyledButtonContainer
} from './style'

export const NavMenu = ({ isDarkMode, setDarkMode }) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<StyledContainer>
			<StyledToggleContainer>
				<StyledToggle active={isDarkMode} onClick={() => setDarkMode(!isDarkMode)}/>
			</StyledToggleContainer>
			<MenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<StyledMenu active={isMenuOpen}>
				<StyledLink href="/about">About</StyledLink>
				<NavDropdown title="Services">
					<NavDropdownLink href="/development">Development</NavDropdownLink>
					<NavDropdownLink href="/maintenance">Maintenance</NavDropdownLink>
					<NavDropdownLink href="/branding-and-design">Branding and Design</NavDropdownLink>
				</NavDropdown>
				<StyledLink href="/portfolio">Portfolio</StyledLink>
				<StyledLink href="/contact">Contact</StyledLink>
				<StyledButtonContainer>
					<Button outline pill lightBlue fullWidth href="/contact">Get Started</Button>
				</StyledButtonContainer>
			</StyledMenu>
		</StyledContainer>

	)
}
