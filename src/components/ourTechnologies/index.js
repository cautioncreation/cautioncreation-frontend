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

import { SectionStatic, Row, Column } from '../grid'
import { Slider } from '../slider'

import {
	StyledColumn,
	StyledTitle,
	StyledVectorContainer,
	StyledVector,
} from './style'

export const OurTechnologies = withTheme(({ theme }) => (
	<SectionStatic background={theme.colors.lightGrey}>
		<StyledTitle>A Few of Our Favourite Technologies</StyledTitle>
		<Row>
			<Column xs="0" lg="1" spacer />
			<StyledColumn xs="12" lg="10">
				<Slider interval="2" prefix="technologies" show="5" hideIcons>
					<StyledVectorContainer>
						<StyledVector src={sass} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={nodejs} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={mysql} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={react} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={php} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={gatsby} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={netlify} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={strapi} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={heroku} />
					</StyledVectorContainer>
					<StyledVectorContainer>
						<StyledVector src={bootstrap} />
					</StyledVectorContainer>
				</Slider>
			</StyledColumn>
			<Column xs="0" lg="1" spacer />
		</Row>
	</SectionStatic>
))
