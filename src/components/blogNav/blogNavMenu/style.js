import styled, { css } from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const MenuWrapper = styled.div`
	position: fixed;
	z-index: 1;
	top: 64px;
	right: 0;
	bottom: 0;
	width: 0;
	transition: 0.4s;
	opacity: 0;
	overflow: hidden;

	${props => props.active ? css`
		padding: 32px 16px 0;
		width: 100%;
		opacity: 1;
		background: ${props => props.theme.colors.black};
		@media(min-width: ${props => props.theme.breakpoints.md}) {
			width: 320px;
		}
	` : null}
`

export const Menu = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	max-height: 100%;
	overflow: auto;
	margin-bottom: 64px;
`

export const Link = styled.a`
	padding: 16px 0;
	margin: 0px 16px;
	font-size: 1.25rem;
	white-space: nowrap;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	&:hover {
		position: relative;
		&:after {
			content: '';
			position: absolute;
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

export const ButtonContainer = styled.div`
	padding: 16px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	border-top: 1px solid ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.black};
`
