import styled from 'styled-components'

export const DropdownWrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
`


export const Title = styled.a`
	padding: 16px;
	font-size: 1.25rem;
	color: ${props => props.theme.colors.white};
	text-decoration: none;
	transition: width 0.5s;
	&:after {
		content: "${props => props.active ? "▴" : "▾"}";
		margin-left: 5px;
		color: ${props => props.theme.colors.white};
	}
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 8px;
		&:after {
			content: "";
			margin-left: 0;
		}
		${DropdownWrapper}:hover & {
			position: relative;
			padding-bottom: 6px;
			&:after {
				content: "";
				display: block;
				border-top: 2px solid ${props => props.theme.colors.yellow};
				width: 100%;
				animation: line 0.7s;
			}
		}
	}

	@keyframes line {
		from {width: 0}
		to {width: 100%}
	}
`

export const DropdownContainer = styled.div`
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s;
	@media(max-width: ${props => props.theme.breakpoints.lgDown}) {
		max-height: ${props => props.active ? '400px' : null};
	}
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		position: absolute;
		left: 8px;
		top: 100%;
		${DropdownWrapper}:hover & {
			max-height: 400px;
		}
	}
`

export const Dropdown = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 24px;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 16px;
		border-radius: 5px;
		border: 1px solid ${props => props.theme.colors.mediumGrey};
		background: ${props => props.theme.colors.white};
	}
`

export const Link = styled.a`
	padding: 16px 0;
	margin: 0px 16px;
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
