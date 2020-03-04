import styled from 'styled-components'

export const StyledWrapper = styled.div`
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding-left: 60px;
		padding-right: 60px;
	}
`

export const StyledTitle = styled.h1`
	margin: 0 0 1.5rem;
	span {
		color: ${props => props.theme.colors.blue};
		font-weight: 700;
	}
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`

export const StyledText = styled.p`
	margin-top: 0.5rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 1.25rem;
	}
`

/*
import { StyledColumn as Column } from '../grid/style'

export const StyledColumn = styled(Column)`
	padding-left: 80px;
	padding-right: 80px;
`
*/
