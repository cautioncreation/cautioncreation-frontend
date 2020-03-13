import styled, { css } from 'styled-components'

export const StyledToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 0 8px;
`

export const StyledToggle = styled.button`
	height: 20px;
	width: 64px;
	padding: 0;
	border-radius: 10px;
	border: none;
	position: relative;
	font-size: 1.25rem;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px;
	}
	&:after {
		content: "";
		display: block;
		background-color: black;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		transition: position 1s;
		${props => props.active === 'true' ? css`
			top: 0;
			left: auto;
			right: 0;
		` : null}
	}
`
