import React from 'react'
import { withTheme } from 'styled-components'

import CodeReview from '../../images/svg/undraw_code_review.svg'

import { ContainerStatic, Row, Column } from '../grid'

import {
	StyledTextColumn,
	StyledTextWrapper,
	StyledSubTitle,
	StyledTitle,
	StyledVector,
} from './style'

export const ServicesHero = withTheme(({theme}) => (
	<ContainerStatic background={theme.colors.yellow}>
		<Row>
			<StyledTextColumn xs="12" lg="8">
				<StyledTextWrapper>
					<StyledSubTitle>Our Services</StyledSubTitle>
					<StyledTitle>
						From design to deployment, and everything inbetween!
					</StyledTitle>
				</StyledTextWrapper>
			</StyledTextColumn>
			<Column xs="2" lg="0"/>
			<Column xs="8" lg="4">
				<StyledVector src={CodeReview} alt="Man walking past screen"/>
			</Column>
			<Column xs="2" lg="0"/>
		</Row>
	</ContainerStatic>
))
