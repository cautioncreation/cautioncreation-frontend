import React from 'react'

import { SectionStatic, Row, Column } from '../grid'

import {
	StyledTitle,
	StyledLine,
	StyledSubtitle,
	StyledParagraph,
} from './style'

export const OurPrinciples = () => (
	<SectionStatic>
		<Row>
			<Column>
				<StyledTitle>
					Our Principles
				</StyledTitle>
				<StyledLine />
			</Column>
			<Column xs="12" lg="4">
				<StyledSubtitle>Usability</StyledSubtitle>
				<StyledParagraph>
					Whether the product is a simple website or a complicated application, usability is a key factor in the experience of your customers, and is an important consideration in how we develop applications.
				</StyledParagraph>
			</Column>
			<Column xs="12" lg="4">
				<StyledSubtitle>Optimization</StyledSubtitle>
				<StyledParagraph>
					If a web page takes over three seconds to load, more than fifty percent of users will abandon the site. By optimizing your website or application, we ensure users not only stay on your site, but enjoy the experience.
				</StyledParagraph>
			</Column>
			<Column xs="12" lg="4">
				<StyledSubtitle>Near Perfection</StyledSubtitle>
				<StyledParagraph>

				</StyledParagraph>
			</Column>
		</Row>
	</SectionStatic>
)
