import React from 'react'

import Facebook from '../../images/svg/facebook.svg'
import Instagram from '../../images/svg/instagram.svg'
import LinkedIn from '../../images/svg/linkedin.svg'
import Twitter from '../../images/svg/twitter.svg'
import DownArrow from '../../images/svg/down-arrow.svg'

import { Hero } from '../hero'
import { Column } from '../grid'
import { Button } from '../button'
import {
	StyledTitle,
	StyledContainer,
	StyledSocialContainer,
	StyledSocialLink,
	StyledSocialIcon,
	StyledArrowContainer,
	StyledArrowText,
	StyledArrowIcon,
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
			<StyledSocialContainer>
				<StyledSocialLink href="facebook.com/cautioncreation">
					<StyledSocialIcon src={Facebook} />
				</StyledSocialLink>
				<StyledSocialLink>
					<StyledSocialIcon src={Instagram} />
				</StyledSocialLink>
				<StyledSocialLink>
					<StyledSocialIcon src={LinkedIn} />
				</StyledSocialLink>
				<StyledSocialLink>
					<StyledSocialIcon src={Twitter} />
				</StyledSocialLink>
			</StyledSocialContainer>
			<StyledArrowContainer>
				<StyledArrowIcon src={DownArrow}/>
				<StyledArrowText>Scroll</StyledArrowText>
			</StyledArrowContainer>

	</Hero>
)
