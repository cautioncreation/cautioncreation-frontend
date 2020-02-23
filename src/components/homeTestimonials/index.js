import React from 'react'

import { Row } from '../grid'
import { TestimonialCarousel } from '../testimonialCarousel'

import {
	StyledSection,
	StyledContainerStatic,
	StyledColumn,
	StyledTitle,
	StyledLine
} from './style'

export const HomeTestimonials = (props) => (
	<StyledSection>
		<StyledContainerStatic>
			<Row>
				<StyledColumn xs="12" lg="4" flex center noPadding>
					<StyledTitle>
						What Our Clients Are Saying
						<StyledLine />
					</StyledTitle>
				</StyledColumn>
				<StyledColumn xs="12" lg="8" flex center noPadding>
					<TestimonialCarousel testimonials={props.data} interval="12"/>
				</StyledColumn>
			</Row>
		</StyledContainerStatic>
	</StyledSection>

)
