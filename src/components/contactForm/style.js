import styled from 'styled-components'

export const StyledPageTitle = styled.h1`
	margin: 0 0 3rem;
	font-size: 3rem;
	font-weight: 600;
	font-family: ${props => props.theme.fonts.secondary};
	border-left: 4px solid ${props => props.theme.colors.blue};
	padding-left: 10px;
`

export const StyledInfoContainer = styled.div`
	text-align: right;
	padding-bottom: 1rem;
`

export const StyledTitle = styled.h1`
	margin: 0 0 0.5rem;
	font-size: 2rem;
	font-weight: 600;
	font-family: ${props => props.theme.fonts.secondary};
`

export const StyledInfo = styled.a`
	font-size: 1.25rem;
	font-weight: 500;
`

export const StyledAttachmentContainer = styled.div`

`

export const StyledSVG = styled.img`
	height: 100%;
`
