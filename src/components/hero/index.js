import React from 'react'

import { Container } from '../grid'

import {
	StyledBackground,
} from './style'

export const Hero = ({ children, src, alt }) => (
	<Container>
		<StyledBackground Tag="div" fluid={src} alt={alt} critical>
			{children}
		</StyledBackground>
	</Container>
)
