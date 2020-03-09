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
		<StyledDropdownContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledDropdown>
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
