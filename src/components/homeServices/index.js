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
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
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
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				</StyledParagraphRight>
			</StyledColumnRight>
			<Column xs="0" lg="1"/>
		</Row>
		<Row>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Maintenance</StyledHeader>
				<StyledParagraph>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				</StyledParagraph>
			</StyledColumn>
			<Column xs="12" lg="4">
				<StyledImage fluid={src[2]} />
			</Column>
			<Column xs="0" lg="1"/>
		</Row>
	</SectionStatic>
)
