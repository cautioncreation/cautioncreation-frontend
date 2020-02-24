import React, { Component } from 'react'

import {
	StyledWrapper,
	StyledContainer,
	StyledIconContainer,
	StyledIcon,
	StyledIconSlider,
} from './style'

export class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			isClicked: false,
		}

		this.timer = null
		this.handleClick = this.handleClick.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
	}

	handleClick(iconIndex) {
		this.setState({
			count: iconIndex,
			isClicked: true,
		})
	}

	nextSlide() {
		let icons = document.getElementsByClassName('slider-icon')
		let items = document.getElementById('sliderContainer').children
		let iconContainers = document.getElementsByClassName('slider-icon-container')
		let length = this.props.children.length

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
		let container = document.getElementById('sliderContainer')
		let length = this.props.children.length

		if(length % 2 === 0) {
			container.style.marginLeft = (((length - 2) / 2) * -100 + "%")
		}
		else {
			container.style.marginLeft = (((length - 1) / 2) * -100 + "%")
		}
		container.style.width = (length * 100 + "%")
		this.nextSlide()
	}

	componentDidUpdate() {
		if(this.state.isClicked === true) {
			clearTimeout(this.timer)
			this.nextSlide()
		}
		else {
			this.timer = setTimeout(() => {this.nextSlide()}, this.props.interval * 1000);
			return () => clearTimeout(this.timer);
		}
	}

	render() {
		return (
			<StyledWrapper>
				<StyledContainer id="sliderContainer">
					{this.props.children}
				</StyledContainer>
				<StyledIconContainer>
					{this.props.children.map((item, i) => (
						<StyledIcon
							key={i}
							onClick={() => this.handleClick(i)}
							className={i === 0 ? "slider-icon-container active" : "slider-icon-container"}
							>
							<StyledIconSlider
								time={this.props.interval + "s"}
								className={i === 0 ? "slider-icon active" : "slider-icon"}
							/>
						</StyledIcon>
					))}
				</StyledIconContainer>
			</StyledWrapper>
		)
	}
}
