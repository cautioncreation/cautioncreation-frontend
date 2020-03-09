import styled, { css } from 'styled-components'

export const StyledDropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	&:hover {
		position: relative;
	}
`

export const StyledTitle = styled.a`
	padding: 16px;
	display: inline-block;
	margin: auto;
	text-align: center;
	font-size: 1.25rem;
	color: white;
	vertical-align: middle;
	text-decoration: none;
	transition: width 1s;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px;
	}
`

export const StyledDropdown = styled.ul`
	border-radius: 5px;
	background: ${props => props.theme.colors.white};
	margin: 0;
	padding: 1rem 0;
	display: ${props => props.active ? 'flex' : 'none'};
	flex-direction: column;
	width: auto;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		position: absolute;
		left: 8px;
		top: 100%;
		right: auto;
	}


`

export const StyledListItem = styled.li`
	list-style-type: none;
	padding: 0 1rem 1rem;
	width: 100%;
	text-align: center;
`

export const StyledLink = styled.div`

`
