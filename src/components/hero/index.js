import React from 'react'

import { Container, Row, Column } from '../grid'

import {
	StyledContainer,
	StyledBackground,
	StyledSmallBackground,
	StyledTint,
	StyledTextColumn,
	StyledSubtitle,
	StyledTitle
} from './style'

export const Hero = ({ children, src, alt }) => (
	<StyledContainer>
		<StyledBackground Tag="div" fluid={src} alt={alt}>
			{children}
		</StyledBackground>
	</StyledContainer>
)

export const HeroSmall = ({ children, src, alt, title, text, darken, position }) => (
	<StyledContainer>
		<StyledSmallBackground Tag="div" fluid={src} alt={alt} position={position}>
			{darken ? <StyledTint darken={darken} /> : null}
			<Container>
				<Row>
					<Column xs="0" lg="1" spacer />
					<StyledTextColumn xs="12" lg="6">
						<StyledSubtitle>{title}</StyledSubtitle>
						<StyledTitle>{text}</StyledTitle>
					</StyledTextColumn>
					<Column xs="0" lg="5" spacer />
				</Row>
			</Container>
		</StyledSmallBackground>
	</StyledContainer>
)
