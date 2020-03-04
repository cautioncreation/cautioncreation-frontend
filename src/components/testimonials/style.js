import styled from 'styled-components'

import { StyledColumn as Column } from '../grid/style'

export const StyledColumn = styled(Column)`
	display: flex;
	justify-content: center;
	align-items: center;
`


export const StyledTitle = styled.h1`
	font-size: 2.5rem;
	color: ${props => props.theme.colors.white};
	font-weight: 700;
	text-align: center;
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3rem;
	}
`

export const StyledLine = styled.hr`
	margin: 0.5rem auto 0;
	width: 40%;
	border: none;
	border-bottom: 5px solid ${props => props.theme.colors.yellow};
`

export const StyledTestimonial = styled.div`
	background: ${props => props.theme.colors.white};
	border: 2px solid ${props => props.theme.colors.mediumGrey};
	border-radius: 0.5rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	position: relative;
	transition: left 1s;
	&.active {
		z-index: 2;
	}
`

export const StyledText = styled.p`
	font-size: 1rem;
	text-align: left;
	margin-top: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.25rem;
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
	font-size: 1.125rem;
	text-align: center;
	span {
		color: ${props => props.theme.colors.black};
		font-weight: 500;
	}
`
