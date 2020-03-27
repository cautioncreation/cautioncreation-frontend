import styled from 'styled-components'

import { Column as StyledColumn } from '../../components/grid/style'

export const Column = styled(StyledColumn)`
	display: flex;
	justify-content: center;
	align-items: center;
`


export const Title = styled.h1`
	font-size: 2.5rem;
	color: ${props => props.theme.colors.white};
	font-weight: 700;
	text-align: center;
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3rem;
	}
`

export const Line = styled.hr`
	margin: 0.5rem auto 0;
	width: 40%;
	border: none;
	border-bottom: 5px solid ${props => props.theme.colors.yellow};
`

export const Testimonial = styled.div`
	background: ${props => props.theme.colors.background};
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

export const Text = styled.p`
	font-size: 1rem;
	text-align: left;
	margin-top: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.25rem;
	}
`

export const Name = styled.h2`
	margin: 0;
	margin-top: auto;
	font-weight: 500;
	text-align: center;
`

export const Company = styled.p`
	margin: 0;
	font-size: 1.125rem;
	text-align: center;
	span {
		color: ${props => props.theme.colors.header};
		font-weight: 500;
	}
`
