import React from 'react'
import { withTheme } from 'styled-components'

import { SectionStatic, Row } from '../grid'
import { Slider } from '../slider'

import {
	StyledColumn,
	StyledTitle,
	StyledLine,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany,
} from './style'

export const HomeTestimonials = withTheme(({ data, theme }) => (
	<SectionStatic background={theme.colors.darkBlue}>
			<Row>
				<StyledColumn xs="12" lg="4">
					<StyledTitle>
						What Our Clients Are Saying
						<StyledLine />
					</StyledTitle>
				</StyledColumn>
				<StyledColumn xs="12" lg="8">
					<Slider interval="12">
						{data.map(({ node }, i) => (
							<StyledTestimonial key={node.id}>
								<StyledText>"{node.testimonial}"</StyledText>
								<StyledName>{node.name}</StyledName>
								<StyledCompany>
									<span>{node.position}</span> at <span>{node.company}</span>
								</StyledCompany>
							</StyledTestimonial>
						))}
					</Slider>
				</StyledColumn>
			</Row>
	</SectionStatic>

))
