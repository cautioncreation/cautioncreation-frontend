import React from 'react'
import Typing from 'react-typing-animation';

import DownArrow from '../../images/svg/down-arrow.svg'

import { Hero } from '../../sections/hero'
import { Column } from '../../components/grid'
import { Button } from '../../components/button'
import { SocialIcons } from '../../components/socialIcons'
import {
	StyledHeroColumn,
	StyledTitle,
	StyledText,
	StyledContainer,
	StyledSocialContainer,
	StyledArrowContainer,
	StyledArrowText,
	StyledArrowIcon,
} from './style'

export const HomeHero = ({ src }) => (
	<Hero src={src}>
			<Column xs='0' md='1' lg='2'/>
			<StyledHeroColumn xs='12' md='10' lg='8'>
				<StyledContainer>
					<Typing loop={true} speed={75}>
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
						Caution Creation is a web development firm that specializes in performant, responsive web applications for modern businesses.
					</StyledText>
					<Button href='/hello' outline pill large lightBlue>Request A Quote</Button>
				</StyledContainer>
			</StyledHeroColumn>
			<Column xs='0' md='1' lg='2'/>
			<StyledSocialContainer>
				<SocialIcons />
			</StyledSocialContainer>
			<StyledArrowContainer>
				<StyledArrowIcon src={DownArrow} alt="Scroll Down Arrow"/>
				<StyledArrowText>Scroll</StyledArrowText>
			</StyledArrowContainer>
	</Hero>
)
