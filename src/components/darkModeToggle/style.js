import styled, { css } from 'styled-components'

export const StyledToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 0 8px;
`

export const StyledToggle = styled.button`
	height: 24px;
	width: 64px;
	padding: 0;
	border-radius: 12px;
	border: none;
	position: relative;
	font-size: 1.25rem;
	vertical-align: middle;
	text-decoration: none;
	background-color: ${props => props.theme.colors.background};
	&:before {
		content: "${props => props.active === 'true' ? "Dark" : "Light"}";
		color: ${props => props.theme.colors.header};
		font-weight: 600;
		font-size: 0.8rem;
		line-height: 1;
		position: absolute;
		right: 6px;
		top: 5.6px;
		text-align: center;
		vertical-align: middle;
		${props => props.active === 'true' ? css`
			left: 6px;
			right: auto;
		` : null}
	}
`

export const StyledToggleIcon = styled.span`
	display: block;
	background-color: black;
	position: absolute;
	top: 0;
	left: 0px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	transition: left 0.8s;
	${props => props.active === 'true' ? css`
		left: 40px;
	` : null}
`

export const StyledToggleImage = styled.img`
	width: 100%;
`
