import styled from 'styled-components'

export const Vector = styled.img`
	width: 52px;
	margin-right: 10px;
`

export const Title = styled.h1`
	font-weight: 500;
	margin-top: 0;
	color: ${props => props.theme.colors.accent};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3rem;
	}
`

export const Line = styled.hr`
	border: none;
	border-bottom: 2px solid ${props => props.theme.colors.accent};
`

export const Subtitle = styled.h1`
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.accent};
`

export const Paragraph = styled.p`
	line-height: 1.25;
@media(min-width: ${props => props.theme.breakpoints.lg}) {
	font-size: 1.25rem;
}
`
