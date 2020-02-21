import styled from 'styled-components'

export const StyledWrapper = styled.div`
	width: 100%;
	overflow: hidden;
`

export const StyledArrow = styled.img`
	width: 40px;
	height: 20px;
	position: absolute;
	z-index: 10000;
	top: 50%;
	&:nth-of-type(1) {
		transform: rotate(270deg);
		left: -5px;
	}

	&:nth-of-type(2) {
		transform: rotate(90deg);
		right: -5px;
	}
`

export const StyledContainer = styled.div`
	position: relative;
	width: 300%;
	transition: left 0.4s;
	display: flex;
`

export const StyledTestimonial = styled.div`
	background: ${props => props.theme.colors.white};
	border: 2px solid ${props => props.theme.colors.mediumGrey};
	border-radius: 0.5rem;
	margin: 1rem 15px;
	padding: 1rem;
	width: 100%;
	position: relative;
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
