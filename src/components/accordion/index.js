import React, {useState} from 'react'

import {
	StyledWrapper,
	StyledHeaderContainer,
	StyledTextContainer,
	StyledTitle,
	StyledButton,
	StyledVector,
	StyledRect,
} from './style'

export const Accordion = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false)

	function handleClick(props) {
		setIsActive(isActive === false ? true : false)
	}
	return (
		<StyledWrapper>
			<StyledHeaderContainer>
				<StyledTitle>{title}</StyledTitle>
					<StyledVector viewBox="0 0 100 100" onClick={handleClick}>
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
