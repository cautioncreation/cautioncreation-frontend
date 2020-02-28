import React from 'react'

import { Container, Row, Column } from '../grid'

import {
	StyledContainer,
	StyledBackground,
	StyledTextContainer,
	StyledTitle,
	StyledText
} from './style'

export const Hero = ({ children, src, alt }) => (
	<StyledContainer>
		<StyledBackground Tag="div" fluid={src} alt={alt} critical>
			{children}
		</StyledBackground>
	</StyledContainer>
)

export const HeroSmall = ({ children, src, alt, title, text, light }) => (
	<StyledContainer>
		<StyledBackground Tag="div" fluid={src} alt={alt} height="50vh" critical>
			<Container>
				<Row>
					<Column xs="0" lg="2" spacer />
					<Column xs="12" lg="6">
						<StyledTitle light={light}>{title}</StyledTitle>
						<StyledText light={light}>{text}</StyledText>
					</Column>
					<Column xs="0" lg="4" spacer />
				</Row>
			</Container>
		</StyledBackground>
	</StyledContainer>
)
