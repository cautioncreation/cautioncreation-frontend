import styled from 'styled-components'

export const StyledWrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
`

export const StyledContainer = styled.div`
	position: relative;
	display: flex;
	padding: ${props => props.hideIcons ? '15px 0' : '30px 0'};
`

export const StyledIconContainer = styled.div`
	display: ${props => props.hideIcons ? 'none' : 'flex'};
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 2px;
	left: 0;
	right: 0;
`

export const StyledIcon = styled.div`
	width: 16px;
	height: 16px;
	background: ${props => props.theme.colors.white};
	border-radius: 10px;
	margin: 0 8px;
	overflow: hidden;
	transition: width 1s;
	transition: transform 0.5s;
	&.active {
		width: 48px;
	}
	&:hover {
		cursor: pointer;
		transform: scale(1.25);
	}
}
`

export const StyledIconSlider = styled.div`
	width: 0%;
	height: 100%;
	background: ${props => props.theme.colors.lightBlue};
	&.active {
		animation-name: iconAnimate;
		animation-timing-function: linear;
		animation-duration: ${props => props.time};
	}

	@keyframes iconAnimate {
    from {width: 0%}
    to {width: 100%}
}
`
