import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	margin: 0;
	font-weight: 600;
	font-size: 2.5rem;
`

export const StyledSubTitle = styled.h2`
	text-align: center;
	margin-top: 0;
	font-weight: 500;
	font-size: 1rem;
	margin-bottom: 1rem;
	color: ${props => props.theme.colors.blue};
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.75rem;
	}
`

export const StyledText = styled.p`
	text-align: left;
	font-size: 1.125rem;
	margin: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.5rem;
	}
`
