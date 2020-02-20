import React from 'react'

import Star from '../../images/svg/star.svg'
import Drape from '../../images/svg/drape.svg'

import { Column } from '../grid'


import {
	StyledContainer,
	StyledDrape,
	StyledHeader,
	StyledTitle,
	StyledStarContainer,
	StyledStar,
	StyledDrapePoint,
	StyledContent,
} from './style'

export function ProductCard({
	xs,
	sm,
	md,
	lg,
	xl,
	title,
	children,
	starCount
}) {

	function handleStarCount(count) {
		let Output = []
		for(let i = 0; i < count; i++) {
			Output.push(<StyledStar src={Star} key={i}/>)
		}
		return Output
	}

	return (
		<Column xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
			<StyledContainer>
				<StyledDrape>
					<StyledHeader>
						<StyledTitle>{title}</StyledTitle>
						<StyledStarContainer>
							{handleStarCount(starCount)}
						</StyledStarContainer>
					</StyledHeader>
					<StyledDrapePoint src={Drape}/>
				</StyledDrape>
				<StyledContent>
					{children}
				</StyledContent>
			</StyledContainer>
		</Column>
	)
}
