import React from 'react'

import { Row } from '../grid'
import { TestimonialCarousel } from '../testimonialCarousel'

import {
	StyledContainer,
	StyledContainerStatic,
	StyledColumn,
	StyledTitle,
	StyledLine
} from './style'

export const HomeTestimonials = (props) => (
	<StyledContainer>
		<StyledContainerStatic>
			<Row>
				<StyledColumn xs="12" lg="4" flex center noPadding>
					<StyledTitle>
						What Our Clients Are Saying
						<StyledLine />
					</StyledTitle>
				</StyledColumn>
				<StyledColumn xs="12" lg="8" flex center noPadding>
					<TestimonialCarousel testimonials={props.data} interval="15"/>
				</StyledColumn>
			</Row>
		</StyledContainerStatic>
	</StyledContainer>

)
