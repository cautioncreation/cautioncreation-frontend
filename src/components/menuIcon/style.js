import styled from 'styled-components'

export const StyledButton = styled.button`
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

export const StyledVector = styled.svg`
	height: 48px;
	width: 48px;
	padding: 4px;
	transform-origin: center;
`

export const StyledRect = styled.rect`
	transform-origin: center;
	transition-duration: 0.4s;
	fill: ${props => props.theme.colors.white};
`

export const StyledRect1 = styled(StyledRect)`
	&.active {
		transform: translate(-20px, 17.5px) rotate(-315deg);
	}
`

export const StyledRect2 = styled(StyledRect)`
	&.active {
		opacity: 0;
	}
`

export const StyledRect3 = styled(StyledRect)`
 	&.active {
		transform: translate(-20px, -17.5px) rotate(315deg);
	}
`
