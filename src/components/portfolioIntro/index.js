import React from 'react'

import { ContainerStatic, Row, Column } from '../grid'

import {
	StyledTitle,
	StyledText,
} from './style'

export const PortfolioIntro = () => (
	<ContainerStatic>
		<Row>
			<Column xs="12" lg="8">
				<StyledTitle>Our Approach</StyledTitle>
				<StyledText>
					Caution Creation approaches web development differently than your average agency.
				</StyledText>
			</Column>
			<Column xs="0" lg="4" />
		</Row>
	</ContainerStatic>
)
