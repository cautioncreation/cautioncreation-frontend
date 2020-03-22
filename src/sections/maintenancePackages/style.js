import styled from 'styled-components'

export const StyledTitle = styled.h1`
	font-weight: 600;
	text-align: center;
	margin-bottom: 2rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
	}
`
