import React, { useState } from "react"

import { Button } from '../button'
import { BlogMenuIcon } from '../blogMenuIcon'
import { DarkModeToggle } from '../darkModeToggle'
import { BlogNavDropdown, BlogNavDropdownLink } from '../blogNavDropdown'
import {
	StyledContainer,
	StyledMenuWrapper,
	StyledMenu,
	StyledLink,
	StyledButtonContainer
} from './style'

export const BlogNavMenu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<StyledContainer>
			<DarkModeToggle />
			<BlogMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<StyledMenuWrapper active={isMenuOpen}>
				<StyledMenu>
					<StyledLink href="/blog">Blog</StyledLink>
					<StyledLink href="/about">About</StyledLink>
					<BlogNavDropdown title="Services">
						<BlogNavDropdownLink href="/development">Development</BlogNavDropdownLink>
						<BlogNavDropdownLink href="/maintenance">Maintenance</BlogNavDropdownLink>
						<BlogNavDropdownLink href="/branding-and-design">Branding and Design</BlogNavDropdownLink>
					</BlogNavDropdown>
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
