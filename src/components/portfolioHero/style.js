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
	border-left: 4px solid ${props => props.theme.colors.yellow};
	padding-left: 10px;
`

export const StyledSubTitle = styled.h1`
	color: ${props => props.theme.colors.white};
	margin: 0;
`

export const StyledTitle = styled.h1`
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0;
	font-weight: 600;
	font-size: 3.5rem;
`

export const StyledVector = styled.img`
	max-width: 100%;
	max-height: 100%;
`
