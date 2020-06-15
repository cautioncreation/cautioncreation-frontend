import React from 'react'
import Typing from 'react-typing-animation';

import DownArrow from '../../images/svg/down-arrow.svg'

import { Hero } from '../../sections/hero'
import { Column } from '../../components/grid'
import { Button } from '../../components/button'
import { SocialIcons } from '../../components/socialIcons'
import * as S from './style'

export const HomeHero = ({ src }) => (
	<Hero src={src}>
			<Column xs='0' md='1' lg='2'/>
			<S.HeroColumn xs='12' md='10' lg='8'>
				<S.Container>
					<Typing loop={true} speed={75}>
						<S.Title>
							Minimalism when it matters.
							<Typing.Delay ms={2000} />
							<Typing.Backspace count={28} />
							Complexity where it counts.
							<Typing.Delay ms={2000} />
							<Typing.Backspace count={28} />
						</S.Title>
					</Typing>
					<S.Text>
						Caution Creation is a web development firm that specializes in performant, responsive web applications for modern businesses.
					</S.Text>
					<Button href='/contact' outline pill large lightBlue>Request A Quote</Button>
				</S.Container>
			</S.HeroColumn>
			<Column xs='0' md='1' lg='2'/>
			<S.SocialContainer>
				<SocialIcons />
			</S.SocialContainer>
			<S.ArrowContainer>
				<S.ArrowIcon src={DownArrow} alt="Scroll Down Arrow"/>
				<S.ArrowText>Scroll</S.ArrowText>
			</S.ArrowContainer>
	</Hero>
)
