import styled from 'styled-components'
import Image from 'gatsby-image'

import { StyledColumn as Column } from '../grid/style'

export const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	order: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 0;
	}
`

export const StyledColumnRight = styled(StyledColumn)`
	align-items: flex-end;
`

export const StyledVectorWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`

export const StyledVector = styled.img`
	max-width: 100%;
	max-height: 100%;
	padding-top: 2rem;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		padding: 2rem 0;
	}
`


export const StyledHeader = styled.h1`
	font-size: 2.5rem;
	font-weight: 500;
	display: inline-block;
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3rem;
	}
	&:after {
	  content: '';
	  display: block;
	  border-top: 5px solid ${props => props.theme.colors.yellow};
		width: 70%;
	}
`

export const StyledHeaderRight = styled(StyledHeader)`
	text-align: right;
	&:after {
		margin-left: auto;
	}
`

export const StyledParagraph = styled.p`
	font-size: 1.125rem;
	font-weight: 300;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.375rem;
		font-weight: 400;
	}
`

export const StyledParagraphRight = styled(StyledParagraph)`
	text-align: right;
`
