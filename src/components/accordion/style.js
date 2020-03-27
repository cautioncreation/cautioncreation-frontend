import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 15px;
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${props => props.theme.colors.darkBlue};
	border-radius: 5px;
	${props => props.active ? css`
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	` : null};
	&:hover {
		cursor: pointer;
	}
`

export const TextContainer = styled.div`
	border-top: none;
	opacity: 0;
	height: 0;
	padding: 0 16px;
	overflow: hidden;
	transition: opacity 1s;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	${props => props.active ? css`
		opacity: 1;
		height: auto;
		border: 2px solid ${props => props.theme.colors.darkBlue};
	` : null};
`

export const Title = styled.h3`
	margin: 0;
	font-weight: 500;
	font-size: 1.125rem;
	padding: 10px;
	color: ${props => props.theme.colors.white};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 1.25rem;
	}
`

export const Vector = styled.svg`
	height: 40px;
	width: 40px;
	min-width: 40px;
	padding: 4px;
	transform-origin: center;
`

export const Rect = styled.rect`
	transform-origin: center;
	transition-duration: 0.5s;
	fill: ${props => props.theme.colors.white};
	${props => props.active ? css`
		transform: rotate(-315deg);
	` : null};
`
