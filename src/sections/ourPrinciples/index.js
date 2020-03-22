import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'

import puzzle from '../../images/svg/puzzle.svg'
import boss from '../../images/svg/boss.svg'
import hierarchy from '../../images/svg/hierarchy.svg'

import {
	StyledVector,
	StyledTitle,
	StyledLine,
	StyledSubtitle,
	StyledParagraph,
} from './style'

export const OurPrinciples = () => (
	<SectionStatic>
		<Row>
			<Column xs="12">
				<StyledTitle>
					Our Principles
				</StyledTitle>
				<StyledLine />
			</Column>
			<Column xs="12" lg="4">

				<StyledSubtitle>
					<StyledVector src={puzzle} alt="puzzle icon"/>
					Usability
				</StyledSubtitle>
				<StyledParagraph>
					Whether the product is a simple website or a complicated application, usability is a key factor in the experience of your customers, and is an important consideration in how we develop applications.
				</StyledParagraph>
			</Column>
			<Column xs="12" lg="4">
				<StyledSubtitle>
					<StyledVector src={hierarchy} alt="hierarchy icon"/>
					Optimization
				</StyledSubtitle>
				<StyledParagraph>
					If a web page takes over three seconds to load, more than fifty percent of users will abandon the site. By optimizing your website or application, we ensure users not only stay on your site, but enjoy the experience.
				</StyledParagraph>
			</Column>
			<Column xs="12" lg="4">
				<StyledSubtitle>
					<StyledVector src={boss} alt="man icon"/>
					Simplicity
				</StyledSubtitle>
				<StyledParagraph>
					Never uderestimate the power of simplicity. A website designed with simplicity in mind will allow users to follow a more structured information flow, and interact with your site in a more meaningful way.
				</StyledParagraph>
			</Column>
		</Row>
	</SectionStatic>
)
