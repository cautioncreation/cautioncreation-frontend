import styled from 'styled-components'
import { StyledColumn as Column } from '../grid/style'

export const StyledColumn = styled(Column)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const StyledTitle = styled.h1`
	color: ${props => props.theme.colors.black};
	font-family: ${props => props.theme.fonts.secondary};
	font-weight: 700;
	margin: 0;
	text-align: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`

export const StyledVectorContainer = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: left 1s;
	&.active {
		z-index: 2;
	}
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 0 3rem;
	}
`

export const StyledVector = styled.img`
	width: 100%;
`
