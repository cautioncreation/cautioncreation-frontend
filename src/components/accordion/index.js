import React, {useState} from 'react'

import {
	StyledWrapper,
	StyledHeaderContainer,
	StyledTextContainer,
	StyledTitle,
	StyledVector,
	StyledRect,
} from './style'

export const Accordion = ({ title, children, open }) => {
	const [isActive, setIsActive] = useState(open === true ? true : false)

	function handleClick() {
		setIsActive(isActive === false ? true : false)
	}
	return (
		<StyledWrapper>
			<StyledHeaderContainer active={isActive} onClick={handleClick}>
				<StyledTitle>{title}</StyledTitle>
					<StyledVector viewBox="0 0 100 100">
			  		<StyledRect active={isActive} x="45" y="10" width="10" height="80" ry="7.5" />
			  		<StyledRect active={isActive} x="10" y="45" width="80" height="10" ry="7.5" />
					</StyledVector>
			</StyledHeaderContainer>
			<StyledTextContainer active={isActive}>
				{children}
			</StyledTextContainer>
		</StyledWrapper>
	)
}
