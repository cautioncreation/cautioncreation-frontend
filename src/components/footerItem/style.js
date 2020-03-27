import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 15px;
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${props => props.theme.colors.darkBlue};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		background: none;
		display: block;
	}
`

export const TextContainer = styled.div`
	border-top: none;
	opacity: 0;
	height: 0;
	padding: 0 16px;
	overflow: hidden;
	transition: opacity 1s;
	${props => props.active ? css`
		opacity: 1;
		height: auto;
	` : null};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		background: none;
		display: block;
		height: auto;
		opacity: 1;
		border: none;
	}
`

export const Title = styled.h3`
	margin: 0;
	font-weight: 600;
	font-size: 1.25rem;
	padding: 10px;
	color: ${props => props.theme.colors.white};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: center;
	}
`

export const Vector = styled.svg`
	height: 36px;
	width: 36px;
	min-width: 36px;
	padding: 4px;
	transform-origin: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: none;
	}
`

export const Rect = styled.rect`
	transform-origin: center;
	transition-duration: 0.5s;
	fill: ${props => props.theme.colors.white};
	${props => props.active ? css`
		transform: rotate(-315deg);
	` : null};
`
