import styled, { css } from "styled-components"

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledMenu = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	z-index: 1;
	top: 64px;
	right: 0;
	bottom: 0;
	width: 0;
	transition: 0.4s;
	opacity: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		flex-direction: row;
		position: static;
		opacity: 1;
		width: auto;
	}

	&.active {
		padding: 32px 16px 0;
		width: 100%;
		opacity: 1;
		background: ${props => props.theme.colors.black};
		@media(min-width: ${props => props.theme.breakpoints.md}) {
			width: 320px;
		}
	}
`

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
		${props => props.active ? css`
			top: 0;
			left: auto;
			right: 0;
		` : null}
	}
`

export const StyledLink = styled.a`
	padding: 16px;
	font-size: 1.25rem;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px;
	}
	&:hover {
		position: relative;
		&:after {
		  content: '';
		  display: block;
		  border-top: 2px solid ${props => props.theme.colors.yellow};
			width: 100%;
			animation: line 0.7s;
		}
	}

	@keyframes line {
		from {width: 0}
		to {width: 100%}
	}
`

export const StyledButtonContainer = styled.div`
	padding: 16px 16px 32px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 4px 0px 4px 16px;
		position: static;
	}
`
