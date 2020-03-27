import styled from 'styled-components'
import { Column as StyledColumn } from '../../components/grid/style'

export const Column = styled(StyledColumn)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Title = styled.h1`
	color: ${props => props.theme.colors.black};
	font-family: ${props => props.theme.fonts.secondary};
	font-weight: 700;
	margin: 0;
	text-align: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`

export const VectorContainer = styled.div`
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

export const Vector = styled.img`
	width: 100%;
`
