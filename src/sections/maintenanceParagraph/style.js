import styled from 'styled-components'

import { Column as StyledColumn } from '../../components/grid/style'

export const QuestionColumn = styled(StyledColumn)`
	display: flex;
	flex-wrap: wrap;
	padding-top: 2rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding-top: 0;
	}
`

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	margin: auto;
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

export const Paragraph = styled.p`
	font-size: 1.125rem;
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 1.25rem;
	}
`
