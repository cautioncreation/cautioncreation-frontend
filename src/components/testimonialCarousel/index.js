import React, { useEffect } from 'react'

import {
	StyledWrapper,
	StyledContainer,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany,
	StyledIconContainer,
	StyledIcon,
} from './style'

export const TestimonialCarousel = (props) => {
	let count = 0
	let timer = null

	function handleClick(iconIndex) {
		count = iconIndex
		clearTimeout(timer)
		nextTestimonial()
	}

	function nextTestimonial() {
		let items = document.getElementById('testimonialContainer').children
		let icons = document.getElementsByClassName('testimonial-icon')
		let length = props.testimonials.length

		for(let i = 0; i < length; i++) {
			if(i === count) {
				items[i].classList.add('active')
				icons[i].classList.add('active')
			}
			else {
				items[i].classList.remove('active')
				icons[i].classList.remove('active')
			}
		}

		if(count >= length - 1) {
			count = 0
		}
		else {
			count++
		}
		timer = setTimeout(nextTestimonial, props.interval * 1000)
	}

	useEffect(() => {
		nextTestimonial()
	})
	return (
		<StyledWrapper>
			<StyledContainer id="testimonialContainer">
				{props.testimonials.map(({ node }, i) => (
					<StyledTestimonial key={node.id} className={i === 0 ? "active" : ""}>
						<StyledText>"{node.testimonial}"</StyledText>
						<StyledName>{node.name}</StyledName>
						<StyledCompany>{node.position} at {node.company}</StyledCompany>
					</StyledTestimonial>
				))}
			</StyledContainer>
			<StyledIconContainer>
				{props.testimonials.map((item, i) => (
					<StyledIcon className={i === 0 ? "testimonial-icon active" : "testimonial-icon"} key={i} onClick={() => handleClick(i)}/>
				))}
			</StyledIconContainer>
		</StyledWrapper>
	)
}
