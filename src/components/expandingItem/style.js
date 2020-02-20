import styled from 'styled-components'

export const StyledImageWrapper = styled.div`
	display: flex;
`

export const StyledImage = styled.img`
	margin: auto;
	width: 120px;
	height: 120px;
`

export const StyledTitle = styled.h2`
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 0;
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fontPrimary};
`
