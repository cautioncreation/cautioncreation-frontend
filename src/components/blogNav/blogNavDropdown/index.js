import React, { useState } from 'react'

import * as S from './style'

export const BlogNavDropdown = ({ title, href, children }) => {
	const [active, setActive] = useState(true)



	return (
		<S.DropdownWrapper>
			<S.Title onClick={() => setActive(!active)} active={active}>{title}</S.Title>
			<S.DropdownContainer active={active}>
				<S.Dropdown>
					{children}
				</S.Dropdown>
			</S.DropdownContainer>
		</S.DropdownWrapper>
	)
}

export const BlogNavDropdownLink = ({ children, href }) => (
	<S.Link href={href}>{children}</S.Link>
)
