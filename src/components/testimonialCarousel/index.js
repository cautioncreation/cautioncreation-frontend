import React from 'react'

import ArrowIcon from '../../images/svg/arrow.svg'

import {
	StyledWrapper,
	StyledContainer,
	StyledArrowOne,
	StyledArrowTwo,
	StyledTestimonialContainer,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany
} from './style'

export const TestimonialCarousel = (props) => (
	<StyledWrapper>
		<StyledContainer>
			<StyledArrowOne src={ArrowIcon}/>
			<StyledTestimonialContainer>
				<StyledTestimonial>
					<StyledText>
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...  Lorem the industry's standard dummy text ever since"
					</StyledText>
					<StyledName></StyledName>
					<StyledCompany></StyledCompany>
				</StyledTestimonial>
			</StyledTestimonialContainer>
			<StyledArrowTwo src={ArrowIcon}/>
		</StyledContainer>
	</StyledWrapper>
)
