import styled from 'styled-components'

import { StyledColumn as Column } from '../grid/style'

export const StyledColumn = styled(Column)`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	order: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 0;
	}
`

export const StyledColumnRight = styled(Column)`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	order: 1;
`


export const StyledHeader = styled.h1`
	font-size: 3rem;
	font-weight: 500;
	display: inline-block;
	margin: 0;
	&:after {
	  content: '';
	  display: block;
	  border-top: 5px solid ${props => props.theme.colors.yellow};
		width: 70%;
	}
`

export const StyledParagraph = styled.p`
	font-size: 1.75rem;
	margin-bottom: 0;
`
