import React, { useState } from 'react'

import {
	StyledDropdownWrapper,
	StyledDropdownContainer,
	StyledTitle,
	StyledDropdown,
	StyledLink,
} from './style'

export const NavDropdown = ({ title, href, children }) => {
	const [active, setActive] = useState(true)

	return (
		<StyledDropdownWrapper>
			<StyledTitle onClick={() => setActive(!active)} active={active}>{title}</StyledTitle>
			<StyledDropdownContainer active={active}>
				<StyledDropdown>
					{children}
				</StyledDropdown>
			</StyledDropdownContainer>
		</StyledDropdownWrapper>
	)
}

export const NavDropdownLink = ({ children, href }) => (
	<StyledLink href={href}>{children}</StyledLink>
)
