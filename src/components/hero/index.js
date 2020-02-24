import React from 'react'

import {
	StyledContainer,
	StyledBackground,
} from './style'

export const Hero = ({ children, src, alt }) => (
	<StyledContainer>
		<StyledBackground Tag="div" fluid={src} alt={alt} critical>
			{children}
		</StyledBackground>
	</StyledContainer>
)
