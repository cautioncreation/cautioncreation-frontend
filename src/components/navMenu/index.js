import React, { useState } from "react"

import { Button } from '../button'
import { NavMenuIcon } from '../navMenuIcon'
import { NavDropdown, NavDropdownLink } from '../navDropdown'
import {
	StyledContainer,
	StyledMenuWrapper,
	StyledMenu,
	StyledLink,
	StyledButtonContainer
} from './style'

export const NavMenu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<StyledContainer>
			<NavMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<StyledMenuWrapper active={isMenuOpen}>
				<StyledMenu>
					<StyledLink href="/blog">Blog</StyledLink>
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
			</StyledMenuWrapper>
		</StyledContainer>
	)
}
