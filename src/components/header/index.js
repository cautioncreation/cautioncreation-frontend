import React from 'react'

import {
	StyledContainer,
	StyledContainerClose,
	StyledText,
	StyledTitle,
} from './style'

export const Header = ({ title, text, titleColor, textColor }) => (
	<StyledContainer>
		<StyledTitle color={titleColor}>{title}</StyledTitle>
		<StyledText color={textColor}>{text}</StyledText>
	</StyledContainer>
)

export const HeaderClose = ({ title, text, color }) => (
	<StyledContainerClose color={color}>
		<StyledTitle>{title}</StyledTitle>
		<StyledText>{text}</StyledText>
	</StyledContainerClose>
)
