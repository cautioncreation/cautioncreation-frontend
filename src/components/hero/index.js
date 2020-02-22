import React from 'react'


import { Container, Row } from '../grid'
import {
	StyledBackground,
} from './style'

export const Hero = ({ children, src, alt }) => (
	<Container fluid>
		<StyledBackground Tag="div" fluid={src} alt={alt} critical>
			{children}
		</StyledBackground>
	</Container>
)
