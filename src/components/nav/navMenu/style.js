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
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		position: static;
		opacity: 1;
		width: auto;
		overflow: visible;
	}
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-height: 100%;
	margin-bottom: 64px;
	overflow: auto;

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		margin-bottom: 0;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		opacity: 1;
		width: auto;
		overflow: visible;
	}
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

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px 0;
		margin: 0 8px;
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
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 4px 0px 4px 16px;
		position: static;
		background: none;
		border: none;
	}
`
