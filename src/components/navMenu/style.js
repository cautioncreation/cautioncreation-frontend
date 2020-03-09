import styled from "styled-components"

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledMenu = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: fixed;
	z-index: 1;
	top: 64px;
	right: 0;
	bottom: 0;
	width: 0;
	transition: 0.4s;
	opacity: 0;
	padding-top: 32px;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		flex-direction: row;
		position: static;
		width: auto;
		opacity: 1;
		padding-top: 0;
	}

	&.active {
		width: 100%;
		opacity: 1;
		background: ${props => props.theme.colors.black};
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
