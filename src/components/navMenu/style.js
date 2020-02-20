import styled from "styled-components"

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledMenu = styled.div`
	display: flex;
	opacity: 0;
	visibility: hidden;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: absolute;
	top: 64px;
	left: 0;
	right: 0;
	z-index: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		opacity: 1;
		visibility: visible;
		position: static;
	}
	&.active {
		opacity: 1;
		visibility: visible;

		flex-direction: column;
		background: ${props => props.theme.gradients.lightGrey};
		padding: 8px;
		transition: all 0.5s ease-in-out
	}

	@keyframe menu {
		from {height: 0px;}
		to {height: 200px;}
	}
`

export const StyledLink = styled.a`
	padding: 8px;
	font-size: 1.5rem;
	color: white;
	vertical-align: middle;
	text-decoration: none;
`

export const StyledMenuButton = styled.button`
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

export const StyledMenuIcon = styled.img`
	height: 48px;
	border-radius: 2px;
	border: 2px solid ${props => props.theme.colors.white};
`

export const StyledButtonContainer = styled.div`
	padding-left: 8px;
`
