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
					<Button href='/hello' outline pill large>Request A Quote</Button>
				</StyledContainer>
			</Column>
			<Column xs='0' md='1' lg='2'/>
			<StyledSocialContainer>
				<StyledSocialLink href="facebook.com/cautioncreation" aria-label="facebook">
					<StyledSocialIcon src={Facebook} alt="Facebook icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="instagram.com/cautioncreation" aria-label="Instagram">
					<StyledSocialIcon src={Instagram}  alt="Instagram icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="linkedin.com/in/cautioncreation" aria-label="LinkedIn">
					<StyledSocialIcon src={LinkedIn}  alt="LinkedIn icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="twitter.com/cautioncreation" aria-label="Twitter">
					<StyledSocialIcon src={Twitter}  alt="Twitter icon"/>
				</StyledSocialLink>
			</StyledSocialContainer>
			<StyledArrowContainer>
				<StyledArrowIcon src={DownArrow} alt="Scroll Down Arrow"/>
				<StyledArrowText>Scroll</StyledArrowText>
			</StyledArrowContainer>

	</Hero>
)
