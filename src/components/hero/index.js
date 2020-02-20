import React from 'react'


import { Container } from '../grid'
import {
	StyledBackground,
} from './style'

export const Hero = ({ children, src, alt }) => (
		<Container fluid>
			<StyledBackground Tag="section" fluid={src} alt={alt} critical>
				{children}
			</StyledBackground>
		</Container>
)
