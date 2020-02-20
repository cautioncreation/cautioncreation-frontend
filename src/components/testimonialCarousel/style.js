import styled from 'styled-components'

export const StyledWrapper = styled.div`

`

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const StyledArrow = styled.img`
	width: 48px;
	height: 24px;
	position: absolute;
`

export const StyledArrowOne = styled(StyledArrow)`
	transform: rotate(270deg);
	left: 0;
`

export const StyledArrowTwo = styled(StyledArrow)`
	transform: rotate(90deg);
	right: 0;
`

export const StyledTestimonialContainer = styled.div`
	padding: 0 1.5rem;
`

export const StyledTestimonial = styled.div`
	background: ${props => props.theme.colors.white};
	border: 2px solid ${props => props.theme.colors.mediumGrey};
	border-radius: 0.5rem;
	margin: 1rem 0;
`

export const StyledText = styled.p`
	font-size: 1.75rem;
	text-align: center;
`

export const StyledName = styled.h2`

`

export const StyledCompany = styled.h3`

`
