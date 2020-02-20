import React from 'react'

import { ContainerStatic, Row, Column } from '../grid'
import { TestimonialCarousel } from '../testimonialCarousel'

import {
	StyledTitle,
	StyledLine
} from './style'

export const HomeTestimonials = (props) => (
	<ContainerStatic type="gradients" background="black">
		<Row>
			<Column xs="12" lg="4" flex center noPadding>
				<StyledTitle>
					What Our Clients Are Saying
					<StyledLine />
				</StyledTitle>
			</Column>
			<Column xs="12" lg="8" flex center noPadding>
				<TestimonialCarousel>
					
				</TestimonialCarousel>
			</Column>
		</Row>
	</ContainerStatic>
)
