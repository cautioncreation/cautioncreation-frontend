import styled from 'styled-components'

export const StyledInfoContainer = styled.div`
	text-align: left;
	padding-bottom: 1rem;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		text-align: right;
	}
`

export const StyledTitle = styled.h1`
	margin: 0 0 0.5rem;
	font-size: 2rem;
`

export const StyledInfo = styled.a`
	font-size: 1.25rem;
	font-weight: 500;
`

export const StyledCheckboxText = styled.p`
	margin: auto;
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`

export const StyledAttachmentContainer = styled.div`

`

export const StyledSVG = styled.img`
	height: 100%;
`
