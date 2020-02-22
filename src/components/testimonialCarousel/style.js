import styled from 'styled-components'

export const StyledWrapper = styled.div`
	width: 100%;
	overflow: hidden;
`

export const StyledContainer = styled.div`
	position: relative;
	width: 100%;
	padding: 2rem 0;
`

export const StyledTestimonial = styled.div`
	background: ${props => props.theme.colors.white};
	border: 2px solid ${props => props.theme.colors.mediumGrey};
	border-radius: 0.5rem;
	padding: 1rem;
	width: 100%;
	position: relative;
	transition: top 1.5s;
	display: none;
	animation-name: move;
  animation-duration: 1s;
	&.active {
		display: block;
	}

	@keyframes move {
		from {right: -100%; display: block;}
		to {right: 0%;}
	}
`

export const StyledText = styled.p`
	font-size: 1.5rem;
	text-align: center;
	margin-top: 0;
`

export const StyledName = styled.h2`
	margin: 0;
	font-weight: 500;
	text-align: center;
`

export const StyledCompany = styled.p`
	margin: 0;
	font-size: 1.25rem;
	text-align: center;
`

export const StyledIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`

export const StyledIcon = styled.div`
	width: 24px;
	height: 24px;
	background: ${props => props.theme.colors.white};
	border-radius: 50%;
	margin: 0 8px;
	&.active {
		background: ${props => props.theme.colors.yellow};
	}
`
