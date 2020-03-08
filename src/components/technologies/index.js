import React from 'react'
import { withTheme } from 'styled-components'

import sass from '../../images/svg/sass.svg'
import nodejs from '../../images/svg/nodejs.svg'
import mysql from '../../images/svg/mysql.svg'
import react from '../../images/svg/react.svg'
import php from '../../images/svg/php.svg'
import gatsby from '../../images/svg/gatsby.svg'
import heroku from '../../images/svg/heroku.svg'
import strapi from '../../images/svg/strapi.svg'
import netlify from '../../images/svg/netlify.svg'
import bootstrap from '../../images/svg/bootstrap.svg'

import { ContainerStatic, Row, Column } from '../grid'
import { Slider } from '../slider'

import {
	StyledColumn,
	StyledTitle,
	StyledVectorContainer,
	StyledVector,
} from './style'

export const Technologies = withTheme(({ theme }) => (
	<ContainerStatic background={theme.colors.lightGrey}>
		<StyledTitle>A Few of Our Favourite Technologies</StyledTitle>
		<Row>
			<Column xs="0" lg="1" spacer />
			<StyledColumn xs="12" lg="10">
				<Slider interval="2" prefix="technologies" show="5" hideIcons>
					<StyledVectorContainer>
						<StyledVector src={sass} alt="Sass logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={nodejs} alt="Node.js logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={mysql} alt="mySQL logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={react} alt="React.js logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={php} alt="PHP logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={gatsby} alt="Gatsby.js logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={netlify} alt="Netlify logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={strapi} alt="Strapi logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={heroku} alt="Heroku logo" />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={bootstrap} alt="Bootstrap logo" />
					</StyledVectorContainer>
				</Slider>
			</StyledColumn>
			<Column xs="0" lg="1" spacer />
		</Row>
	</ContainerStatic>
))
