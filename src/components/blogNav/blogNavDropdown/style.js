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
	cursor: pointer;
	&:after {
		content: "${props => props.active ? "▴" : "▾"}";
		margin-left: 5px;
		color: ${props => props.theme.colors.white};
	}
`

export const DropdownContainer = styled.div`
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s;
	max-height: ${props => props.active ? '400px' : null};
`

export const Dropdown = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 24px;
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
