import styled from 'styled-components'

export const StyledLink = styled.a`
	display: flex;
	flex: none;
	align-items: center;
	text-decoration: none;
`

export const StyledButton = styled.button.attrs(props => ({
	Padding:
		(props.large ? "0.625rem 1.375rem" : "") ||
		(props.outline ? '0.375rem 0.875rem' : '0.5rem 1rem'),
	Background:
		(props.yellow ? props.theme.colors.yellow : '') ||
		(props.outline ? 'none' : props.theme.colors.blue),
	BorderRadius:
		(props.pill ? '3rem' : '') ||
		(props.outline ? '0.125rem' : ''),
	Border:
		(props.outline ? `2px solid ${props.theme.colors.blue}` : 'none'),
	FontSize:
		(props.large ? '2.25rem' : '1.5rem'),


}))`
	font-weight: 500;
	font-family: ${props => props.theme.fonts.primary};
	font-size: ${props => props.FontSize};
	line-height: 1;
	cursor: pointer;
	color: ${props => props.theme.colors.white};
	padding: ${props => props.Padding};
	background: ${props => props.Background};
	border-radius: ${props => props.BorderRadius};
	border: ${props => props.Border};

	&:hover {
		background: ${props => props.theme.colors.blue};
		color: ${props => props.theme.colors.white};
		animation: buttonBackground 0.75s;
	}

	@keyframes buttonBackground {
		from {background: none}
		to {background: ${props => props.theme.colors.blue}}
	}
`
