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
		let icons = document.getElementsByClassName(this.props.prefix + "-slider")
		let items = document.getElementById(this.props.prefix + "Container").children
		let iconContainers = document.getElementsByClassName(this.props.prefix + "-icon")
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
		let items = document.getElementById(this.props.prefix + "Container").children
		let container = document.getElementById(this.props.prefix + "Container")
		let length = this.props.children.length

		container.style.width = length / (this.props.show || 1) * 100 + "%"

		for(let i = 0; i < items.length; i++) {
			items[i].style.width = (100 / length) + "%"
		}

		if((length - (this.props.show || 1)) % 2 === 0) {
			container.style.marginLeft = (((length - (this.props.show || 1)) / 2) * -100 / (this.props.show || 1) + "%")
		}
		else {
			container.style.marginLeft = (((length - (this.props.show || 1) + 1) / 2) * -100 / (this.props.show || 1) + "%")
		}
		this.nextSlide()
	}

	componentDidUpdate() {
		if(this.state.isClicked === true) {
			clearTimeout(this.timer)
			this.nextSlide()
		}
		else {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {this.nextSlide()}, this.props.interval * 1000);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer)
	}
	render() {
		return (
			<StyledWrapper>
				<StyledContainer hideIcons={this.props.hideIcons} id={(this.props.prefix + "Container")}>
					{this.props.children}
				</StyledContainer>
				<StyledIconContainer id={(this.props.prefix + "IconContainer")} hideIcons={this.props.hideIcons}>
					{this.props.children.map((item, i) => (
						<StyledIcon
							key={i}
							onClick={() => this.handleClick(i)}
							className={i === 0 ? this.props.prefix + "-icon active" : this.props.prefix + "-icon"}
							>
							<StyledIconSlider
								time={this.props.interval + "s"}
								className={i === 0 ? this.props.prefix + "-slider active" : this.props.prefix + "-slider"}
							/>
						</StyledIcon>
					))}
				</StyledIconContainer>
			</StyledWrapper>
		)
	}
}
