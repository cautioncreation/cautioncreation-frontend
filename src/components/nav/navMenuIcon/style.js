import styled from 'styled-components'

export const Button = styled.button`
	height: 48px;
	width: 48px;
	border: none;
	background: none;
	padding: 0;
	margin-left: auto;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: none;
	}
`

export const Vector = styled.svg`
	height: 48px;
	width: 48px;
	padding: 4px;
	transform-origin: center;
`

const Rect = styled.rect`
	transform-origin: center;
	transition-duration: 0.4s;
	fill: ${props => props.theme.colors.white};
`

export const Rect1 = styled(Rect)`
	&.active {
		transform: translate(-20px, 17.5px) rotate(-315deg);
	}
`

export const Rect2 = styled(Rect)`
	&.active {
		opacity: 0;
	}
`

export const Rect3 = styled(Rect)`
 	&.active {
		transform: translate(-20px, -17.5px) rotate(315deg);
	}
`
