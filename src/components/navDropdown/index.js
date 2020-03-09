import React, { useState } from 'react'

import {
	StyledDropdownContainer,
	StyledTitle,
	StyledDropdown,
	StyledLink,
} from './style'

export const NavDropdown = ({ title, href, children }) => {
	const [active, setActive] = useState(false)

	return (
		<StyledDropdownContainer>
			<StyledTitle onClick={() => setActive(!active)} active={active}>{title}</StyledTitle>
			<StyledDropdown active={active}>
				{children}
			</StyledDropdown>
		</StyledDropdownContainer>
	)
}

export const NavDropdownLink = ({ children, href }) => (
	<StyledLink href={href}>{children}</StyledLink>
)
