import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	margin-top: 0;
	font-weight: 500;
	margin-bottom: 0;
	font-size: 2.5rem;
`

export const StyledSubTitle = styled.h2`
	text-align: center;
	margin-top: 0;
	font-weight: 400;
	font-size: 1.75rem;
	margin-bottom: 1rem;
	color: ${props => props.theme.colors.blue};
`

export const StyledText = styled.p`
	font-size: 1.75rem;
	text-align: center;
	margin-top: 0;
`
