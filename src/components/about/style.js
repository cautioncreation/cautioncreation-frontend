import styled from 'styled-components'

export const StyledTitle = styled.h1`
	margin: 0 0 1.5rem;
	span {
		color: ${props => props.theme.colors.blue};
		font-weight: 700;
	}
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`

export const StyledText = styled.p`
	margin-top: 0.5rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 1.25rem;
	}
`
