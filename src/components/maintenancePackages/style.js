import styled from 'styled-components'

export const StyledTitle = styled.h1`
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`
