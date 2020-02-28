import React from 'react'
import { withTheme } from 'styled-components'

import FeelingProud from '../../images/svg/undraw_feeling_proud.svg'

import { ContainerStatic, Row, Column } from '../grid'

import {
	StyledTextColumn,
	StyledTextWrapper,
	StyledSubTitle,
	StyledTitle,
	StyledVector,
} from './style'

export const PortfolioHero = withTheme(({theme}) => (
	<ContainerStatic background={theme.colors.blue}>
		<Row>
			<StyledTextColumn xs="12" lg="8">
				<StyledTextWrapper>
					<StyledSubTitle>Our Portfolio</StyledSubTitle>
					<StyledTitle>
						Businesses big and small, we develop them all!
					</StyledTitle>
				</StyledTextWrapper>
			</StyledTextColumn>
			<Column xs="12" lg="4">
				<StyledVector src={FeelingProud}/>
			</Column>
		</Row>
	</ContainerStatic>
))
