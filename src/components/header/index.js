import React from 'react'

import Pushpin from '../../images/svg/pushpin.svg'

import {
	StyledContainer,
	StyledTitle,
	StyledPin,
	StyledText,
	StyledLine,
} from './style'

export const Header = ({ title, text }) => (
	<StyledContainer>
		<StyledTitle>
			<StyledPin src={Pushpin}/>
			{title}
		</StyledTitle>
		<StyledText>{text}</StyledText>
		<StyledLine />
	</StyledContainer>
)
