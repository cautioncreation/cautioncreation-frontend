import React, { Component } from 'react'

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

export class TestimonialCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			isClicked: false,
		}

		this.timer = null
		this.handleClick = this.handleClick.bind(this);
		this.nextTestimonial = this.nextTestimonial.bind(this);
	}

	handleClick(iconIndex) {
		this.setState({
			count: iconIndex,
			isClicked: true,
		})
	}

	nextTestimonial() {
		let icons = document.getElementsByClassName('testimonial-icon')
		let items = document.getElementById('testimonialContainer').children
		let iconContainers = document.getElementsByClassName('testimonial-icon-container')
		let length = this.props.testimonials.length

		let increment = 100 / length;

		for(let i = 0; i < length; i++) {
			if(i === this.state.count) {
				icons[i].classList.add('active')
				iconContainers[i].classList.add('active')
			}
			else {
				icons[i].classList.remove('active')
				iconContainers[i].classList.remove('active')
			}
			if((i === length - this.state.count) || (i === 0 && this.state.count === 0)) {
				items[i].style.visibility = "hidden";
			}
			else {
				items[i].style.visibility = "visible";
			}
			if(i <= (length - this.state.count - 1)) {
				items[i].style.left = (this.state.count * increment) + "%"
			}
			else {
				items[i].style.left = (-(length - this.state.count) * increment) + "%"
			}
		}
		if(this.state.count >= length - 1) {
			this.setState({
				count: 0,
				isClicked: false,
			})
		}
		else {
			this.setState({
				count: this.state.count + 1,
				isClicked: false,
			})
		}
	}

	componentDidMount() {
		console.log('component mounted')
		let container = document.getElementById('testimonialContainer')
		let length = this.props.testimonials.length

		if(length % 2 === 0) {
			container.style.marginLeft = (((length - 2) / 2) * -100 + "%")
		}
		else {
			container.style.marginLeft = (((length - 1) / 2) * -100 + "%")
		}
		container.style.width = (length * 100 + "%")
		this.nextTestimonial()
	}

	componentDidUpdate() {
		if(this.state.isClicked === true) {
			clearTimeout(this.timer)
			this.nextTestimonial()
		}
		else {
			this.timer = setTimeout(() => {this.nextTestimonial()}, this.props.interval * 1000);
			return () => clearTimeout(this.timer);
		}
	}

	render() {
		return (
			<StyledWrapper>
				<StyledContainer id="testimonialContainer">
					{this.props.testimonials.map(({ node }, i) => (
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
					{this.props.testimonials.map((item, i) => (
						<StyledIcon
							key={i}
							onClick={() => this.handleClick(i)}
							className={i === 0 ? "testimonial-icon-container active" : "testimonial-icon-container"}
							>
							<StyledIconSlider
								time={this.props.interval + "s"}
								className={i === 0 ? "testimonial-icon active" : "testimonial-icon"}
							/>
						</StyledIcon>
					))}
				</StyledIconContainer>
			</StyledWrapper>
		)
	}
}
