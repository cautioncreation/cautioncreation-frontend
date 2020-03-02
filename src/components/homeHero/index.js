import React from 'react'
import Typing from 'react-typing-animation';

import Facebook from '../../images/svg/facebook.svg'
import Instagram from '../../images/svg/instagram.svg'
import LinkedIn from '../../images/svg/linkedin.svg'
import Twitter from '../../images/svg/twitter.svg'
import DownArrow from '../../images/svg/down-arrow.svg'

import { Hero } from '../hero'
import { Column } from '../grid'
import { Button } from '../button'
import {
	StyledHeroColumn,
	StyledTitle,
	StyledText,
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
			<StyledHeroColumn xs='12' md='10' lg='8'>
				<StyledContainer>
					<Typing loop={true} startDelay={100} speed={75}>
						<StyledTitle>
							Minimalism when it matters.
							<Typing.Delay ms={2000} />
							<Typing.Backspace count={28} />
							Complexity where it counts.
							<Typing.Delay ms={2000} />
							<Typing.Backspace count={28} />
						</StyledTitle>
					</Typing>
					<StyledText>
						Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups.
					</StyledText>
					<Button href='/hello' outline pill large>Request A Quote</Button>
				</StyledContainer>
			</StyledHeroColumn>
			<Column xs='0' md='1' lg='2'/>
			<StyledSocialContainer>
				<StyledSocialLink href="https://facebook.com/cautioncreation" target="_blank" aria-label="facebook">
					<StyledSocialIcon src={Facebook} alt="Facebook icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="https://instagram.com/cautioncreation" target="_blank" aria-label="Instagram">
					<StyledSocialIcon src={Instagram}  alt="Instagram icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="https://linkedin.com/in/cautioncreation" target="_blank" aria-label="LinkedIn">
					<StyledSocialIcon src={LinkedIn}  alt="LinkedIn icon"/>
				</StyledSocialLink>
				<StyledSocialLink href="https://twitter.com/cautioncreation" target="_blank" aria-label="Twitter">
					<StyledSocialIcon src={Twitter}  alt="Twitter icon"/>
				</StyledSocialLink>
			</StyledSocialContainer>
			<StyledArrowContainer>
				<StyledArrowIcon src={DownArrow} alt="Scroll Down Arrow"/>
				<StyledArrowText>Scroll</StyledArrowText>
			</StyledArrowContainer>
	</Hero>
)
