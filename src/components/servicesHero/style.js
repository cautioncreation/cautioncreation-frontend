import styled from 'styled-components'

import {
	StyledColumn as Column,
} from '../grid/style'

export const StyledTextColumn = styled(Column)`
	display: flex;
	justify-content: center;
	align-items: center;
	order: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 0;
	}
`

export const StyledTextWrapper = styled.div`
	border-left: 4px solid ${props => props.theme.colors.blue};
	padding-left: 10px;
`

export const StyledSubTitle = styled.h3`
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2rem;
	}
`

export const StyledTitle = styled.h1`
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0;
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3.5rem;
	}
`

export const StyledVector = styled.img`
	max-width: 100%;
	max-height: 100%;
`
