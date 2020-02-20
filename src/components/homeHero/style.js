import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 3.5rem;
	margin: 0;
	margin-bottom: 1rem;
`

export const StyledText = styled.h4`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 2rem;
	margin: 0;
	line-height: 1.25;
	margin-bottom: 2rem;
	font-weight: 400;
	font-family: ${props => props.theme.fontPrimary};
`

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`
