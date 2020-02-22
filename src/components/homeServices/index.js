import React from 'react'
import Image from 'gatsby-image'
import { ContainerStatic, Column, Row } from '../grid'
import {
	StyledColumn,
	StyledColumnRight,
	StyledHeader,
	StyledParagraph,
} from './style'

export const HomeServices = ({ src }) => (
	<ContainerStatic>
		<Row>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Development</StyledHeader>
				<StyledParagraph>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				</StyledParagraph>
			</StyledColumn>
			<Column xs="12" lg="4">
				<Image fluid={src[0]} />
			</Column>
			<Column xs="0" lg="1"/>
		</Row>
		<Row>
			<Column xs="0" lg="1"/>
			<StyledColumnRight xs="12" lg="6">
				<StyledHeader>Branding & Design</StyledHeader>
				<StyledParagraph>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				</StyledParagraph>
			</StyledColumnRight>
			<Column xs="12" lg="4">
				<Image fluid={src[1]} />
			</Column>
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
				<Image fluid={src[1]} />
			</Column>
			<Column xs="0" lg="1"/>
		</Row>
	</ContainerStatic>
)
