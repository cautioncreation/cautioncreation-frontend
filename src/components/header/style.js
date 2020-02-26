import styled from 'styled-components'

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
`

export const StyledPin = styled.img`
	width: 24px;
	height: 24px;
	margin-left: -36px;
	margin-right: 12px;
`

export const StyledTitle = styled.h1`
	text-align: center;
	margin-top: 0;
	font-weight: 600;
	margin-bottom: 0.25rem;
	font-size: 2.5rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3rem;
	}
`

export const StyledText = styled.h1`
	text-align: center;
	margin-top: 0;
	font-size: 1.25rem;
	margin-bottom: 0.25rem;
	color: ${props => props.theme.colors.blue};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 1.875rem;
	}
`

export const StyledLine = styled.hr`
	width: 40%;
	border: none;
	height: 5px;
	background-color: ${props => props.theme.colors.yellow};
	border-radius: 2.5px;
`
