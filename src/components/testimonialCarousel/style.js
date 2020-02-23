import styled from 'styled-components'

export const StyledWrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
`

export const StyledContainer = styled.div`
	position: relative;
	display: flex;
	padding: 2rem 0;
`

export const StyledTestimonial = styled.div`
	background: ${props => props.theme.colors.white};
	border: 2px solid ${props => props.theme.colors.mediumGrey};
	border-radius: 0.5rem;
	padding: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	transition: left 1s;
	&.active {
		z-index: 2;
	}
`

export const StyledText = styled.p`
	font-size: 1.25rem;
	text-align: center;
	margin-top: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.5rem;
	}
`

export const StyledName = styled.h2`
	margin: 0;
	margin-top: auto;
	font-weight: 500;
	text-align: center;
`

export const StyledCompany = styled.p`
	margin: 0;
	font-size: 1.25rem;
	text-align: center;
	span {
		color: ${props => props.theme.colors.blue};
		font-weight: 500;
	}
`

export const StyledIconContainer = styled.div`
	display: flex;
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
	&.active {
		width: 48px;
	}
}
`

export const StyledIconSlider = styled.div`
	width: 0px;
	height: 16px;
	background: ${props => props.theme.colors.blue};
	&.active {
		animation-name: iconAnimate;
		animation-timing-function: linear;
		animation-duration: ${props => props.time};
	}

	@keyframes iconAnimate {
    from {width: 0px}
    to {width: 48px}
}
`
