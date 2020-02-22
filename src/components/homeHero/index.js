import React from 'react'

import { Hero } from '../hero'
import { Column } from '../grid'
import { Button } from '../button'
import {
	StyledTitle,
	StyledText,
	StyledContainer
} from './style'

export const HomeHero = ({ src }) => (
	<Hero src={src}>
			<Column xs='0' md='1' lg='2'/>
			<Column xs='12' md='10' lg='8' flex center>
				<StyledTitle>Minimalism where it matters. Complexity when it counts.</StyledTitle>
				<StyledContainer>
					<Button href='/hello' outline pill>Request A Quote</Button>
				</StyledContainer>
			</Column>
			<Column xs='0' md='1' lg='2'/>
	</Hero>
)
