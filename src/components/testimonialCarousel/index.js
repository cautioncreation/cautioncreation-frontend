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
	StyledIconSlider,
} from './style'

export const TestimonialCarousel = React.memo((props) => {
	let count = 0
	let timer = null

	function handleClick(iconIndex) {
		count = iconIndex
		clearTimeout(timer)
		nextTestimonial()
	}

	function nextTestimonial() {
		console.log('hello')
		let items = document.getElementById('testimonialContainer').children
		let icons = document.getElementsByClassName('testimonial-icon')
		let iconContainers = document.getElementsByClassName('testimonial-icon-container')
		let length = props.testimonials.length

		let increment = 100 / length;

		for(let i = 0; i < length; i++) {
			if(i === count) {
				icons[i].classList.add('active')
				iconContainers[i].classList.add('active')
			}
			else {
				icons[i].classList.remove('active')
				iconContainers[i].classList.remove('active')
			}
			if((i === length - count) || (i === 0 && count === 0)) {
				items[i].style.visibility = "hidden";
			}
			else {
				items[i].style.visibility = "visible";
			}
			if(i <= (length - count - 1)) {
				items[i].style.left = (count * increment) + "%"
			}
			else {
				items[i].style.left = (-(length - count) * increment) + "%"
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
		let container = document.getElementById('testimonialContainer')
		let length = props.testimonials.length
		if(length % 2 === 0) {
			container.style.marginLeft = (((length - 2) / 2) * -100 + "%")
		}
		else {
			container.style.marginLeft = (((length - 1) / 2) * -100 + "%")
		}
		container.style.width = (length * 100 + "%")
		clearTimeout(timer)
		nextTestimonial()
	})
	return (
		<StyledWrapper>
			<StyledContainer id="testimonialContainer">
				{props.testimonials.map(({ node }, i) => (
					<StyledTestimonial key={node.id} className={i === 0 ? "active" : ""}>
						<StyledText>"{node.testimonial}"</StyledText>
						<StyledName>{node.name}</StyledName>
						<StyledCompany>
							<span>{node.position}</span> at <span>{node.company}</span>
						</StyledCompany>
					</StyledTestimonial>
				))}
			</StyledContainer>
			<StyledIconContainer>
				{props.testimonials.map((item, i) => (
					<StyledIcon
						key={i}
						onClick={() => handleClick(i)}
						className={i === 0 ? "testimonial-icon-container active" : "testimonial-icon-container"}
						>
						<StyledIconSlider
							time={props.interval + "s"}
							className={i === 0 ? "testimonial-icon active" : "testimonial-icon"}
						/>
					</StyledIcon>
				))}
			</StyledIconContainer>
		</StyledWrapper>
	)
}, true)
