import React from 'react'

import { SectionStatic, Column, Row } from '../grid'
import {
	StyledColumn,
	StyledColumnRight,
	StyledImage,
	StyledHeader,
	StyledHeaderRight,
	StyledParagraph,
	StyledParagraphRight,
} from './style'

export const HomeServices = ({ src }) => (
	<SectionStatic>
		<Row>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Development</StyledHeader>
				<StyledParagraph>
					Our experienced development team has the experience to ensure that your website or application has the speed, simplicity and style to increase web traffic, conversions and every other metric important to your businesses success. We understand not only your businesses needs, but the needs of your customers as well, and it shows in our development practices.
				</StyledParagraph>
			</StyledColumn>
			<Column xs="12" lg="4">
				<StyledImage fluid={src[0]} />
			</Column>
			<Column xs="0" lg="1"/>
		</Row>
		<Row>
			<Column xs="0" lg="1"/>
			<Column xs="12" lg="4">
				<StyledImage fluid={src[1]} />
			</Column>
			<StyledColumnRight xs="12" lg="6">
				<StyledHeaderRight>Branding & Design</StyledHeaderRight>
				<StyledParagraphRight>
					In today's digital world, brand identity matters. We work hard to ensure that when new visitors view your site they not only have a smooth experience, but they remember your brand identity as well. We do this by ensuring not only that the colours, fonts and logos match your brand, but that the imagery and content speak to your comapanies vision as well.
				</StyledParagraphRight>
			</StyledColumnRight>
			<Column xs="0" lg="1"/>
		</Row>
		<Row>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Maintenance</StyledHeader>
				<StyledParagraph>
					Keeping your websites content and security updated can be a huge undertaking. In a lot of cases it can impede on your ability to run your business, especially if you aren't particularily web literate. Thankfully, Caution Creation is here to step in and take over. Content, security, backups, updates, SEO and more. No matter the size or complexity, we've got your digital needs covered.
				</StyledParagraph>
			</StyledColumn>
			<Column xs="12" lg="4">
				<StyledImage fluid={src[2]} />
			</Column>
			<Column xs="0" lg="1"/>
		</Row>
	</SectionStatic>
)
