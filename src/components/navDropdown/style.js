import styled, { css } from 'styled-components'

export const StyledDropdownContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
`

export const StyledTitle = styled.a`
	padding: 16px 16px 4px;
	font-size: 1.25rem;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px;
	}
	${StyledDropdownContainer}:hover & {
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

export const StyledDropdown = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 16px;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: none;
		padding: 16px;
		border-radius: 5px;
		background: ${props => props.theme.colors.white};
		border: 1px solid ${props => props.theme.colors.lightGrey};
		${StyledDropdownContainer}:hover & {
			display: flex;
			position: absolute;
			left: 8px;
			top: 100%;
		}
	}
`

export const StyledLink = styled.a`
	padding: 16px 0;
	margin: 0 16px;
	font-size: 1.125rem;
	white-space: nowrap;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px 0;
		color: ${props => props.theme.colors.darkGrey};
	}
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
