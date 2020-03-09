import React from 'react'

import { Column } from '../grid'
import { Card } from '../card'

import {
	StyledTitle,
	StyledSubtext,
	StyledPrice,
	StyledParagraph,
	StyledSubtitle,
	StyledScrollWrapper,
	StyledScrollContainer,
	StyledScrollText,
	StyledLinkContainer,
	StyledLink,
} from './style'

export const ServiceCard = ({ service, price, paragraph, subtitle, features }) => (
	<Column xs="12" md="6" lg="4">
		<Card>
			<StyledTitle dangerouslySetInnerHTML={{__html: service}}/>
			<StyledSubtext>Starting At</StyledSubtext>
			<StyledPrice dangerouslySetInnerHTML={{__html: price}}/>
			<StyledParagraph dangerouslySetInnerHTML={{__html: paragraph}}/>
			<StyledSubtitle dangerouslySetInnerHTML={{__html: subtitle}}/>
			<StyledScrollWrapper>
				<StyledScrollContainer>
					{features.map((text) => (
						<StyledScrollText dangerouslySetInnerHTML={{__html: text}}/>
					))}
				</StyledScrollContainer>
			</StyledScrollWrapper>
			<StyledLinkContainer>
				<StyledLink href="/contact">Get Started</StyledLink>
			</StyledLinkContainer>
		</Card>
	</Column>
)
