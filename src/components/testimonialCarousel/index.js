import React from 'react'

import ArrowIcon from '../../images/svg/arrow.svg'

import {
	StyledWrapper,
	StyledArrow,
	StyledContainer,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany
} from './style'

export const TestimonialCarousel = (props) => {
	return (
		<StyledWrapper>
			<StyledArrow src={ArrowIcon}/>
			<StyledContainer>
				{props.testimonials.map(({ node }) => (
					<StyledTestimonial>
						<StyledText>"{node.testimonial}"</StyledText>
						<StyledName>{node.name}</StyledName>
						<StyledCompany>{node.position} at {node.company}</StyledCompany>
					</StyledTestimonial>
				))}
			</StyledContainer>
			<StyledArrow src={ArrowIcon}/>
		</StyledWrapper>
	)	
}
