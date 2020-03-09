import React, { useState } from 'react'

import {
	StyledDropdownContainer,
	StyledTitle,
	StyledDropdown,
	StyledListItem,
	StyledLink,
} from './style'

export const NavDropdown = ({ title, href, children }) => {
	const [active, setActive] = useState(false)

	return (
		<StyledDropdownContainer onHover={() => setActive(!active)}>
			<StyledTitle>{title}</StyledTitle>
			<StyledDropdown active={active}>
				{children}
			</StyledDropdown>
		</StyledDropdownContainer>
	)
}

export const NavDropdownLink = ({ children, href }) => (
	<StyledListItem>
		<StyledLink href={href}>{children}</StyledLink>
	</StyledListItem>
)
