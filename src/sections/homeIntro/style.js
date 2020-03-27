import styled from 'styled-components'

export const Title = styled.h1`
	text-align: center;
	margin: 0 0 1rem;
	font-weight: 600;
	font-size: 2.5rem;
`

export const Text = styled.p`
	text-align: center;
	font-size: 1.125rem;
	margin: 0;
	font-weight: 400;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.5rem;
		text-align: left;
	}
`
