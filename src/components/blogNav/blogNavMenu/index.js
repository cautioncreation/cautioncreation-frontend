import React, { useState } from "react"

import { Button } from '../../button'
import { BlogMenuIcon } from '../blogNavIcon'
import { DarkModeToggle } from '../../darkModeToggle'
import { BlogNavDropdown, BlogNavDropdownLink } from '../blogNavDropdown'
import * as S from './style'

export const BlogNavMenu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<S.Container>
			<DarkModeToggle />
			<BlogMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<S.MenuWrapper active={isMenuOpen}>
				<S.Menu>
					<S.Link href="/blog">Blog</S.Link>
					<S.Link href="/about">About</S.Link>
					<BlogNavDropdown title="Services">
						<BlogNavDropdownLink href="/development">Development</BlogNavDropdownLink>
						<BlogNavDropdownLink href="/maintenance">Maintenance</BlogNavDropdownLink>
						<BlogNavDropdownLink href="/branding-and-design">Branding and Design</BlogNavDropdownLink>
					</BlogNavDropdown>
					<S.Link href="/portfolio">Portfolio</S.Link>
					<S.Link href="/contact">Contact</S.Link>
					<S.ButtonContainer>
						<Button outline pill lightBlue fullWidth href="/contact">Get Started</Button>
					</S.ButtonContainer>
				</S.Menu>
			</S.MenuWrapper>
		</S.Container>
	)
}
