import React, { useState } from "react"

import { Button } from '../../button'
import { NavMenuIcon } from '../navMenuIcon'
import { NavDropdown, NavDropdownLink } from '../navDropdown'

import * as S from './style'

export const NavMenu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<S.Container>
			<NavMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}/>
			<S.MenuWrapper active={isMenuOpen}>
				<S.Menu>
					<S.Link href="/blog">Blog</S.Link>
					<S.Link href="/about">About</S.Link>
					<NavDropdown title="Services">
						<NavDropdownLink href="/development">Development</NavDropdownLink>
						<NavDropdownLink href="/maintenance">Maintenance</NavDropdownLink>
						<NavDropdownLink href="/branding-and-design">Branding and Design</NavDropdownLink>
					</NavDropdown>
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
