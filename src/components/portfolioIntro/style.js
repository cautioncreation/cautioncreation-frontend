import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	margin-top: 0;
	font-weight: 600;
	margin-bottom: 0.5rem;
	font-size: 3.5rem;
	font-family: ${props => props.theme.fonts.secondary};
	&:after {
		content: "";
		display: block;
		margin: auto;
		width: 40%;
		border-bottom: 4px solid ${props => props.theme.colors.yellow};
	}
`

export const StyledText = styled.p`
	text-align: left;
	font-size: 1.125rem;
	margin-top: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.5rem;
	}
`
