import styled from 'styled-components'
import Image from 'gatsby-image'

export const Default = styled.div`

`

export const StyledImageWrapper = styled.div`
	border-radius: 0.25rem;
	overflow: hidden;
	max-height: 100%;
`

export const StyledImage = styled(Image)`
`

export const StyledTextWrapper = styled.div`
	height: 100%;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		align-items: flex-start;
		padding: 0;
	}
`
export const StyledTitle = styled.h1`
	padding-left: 10px;
	text-align: center;
	margin-top: 0;
	border-left: 4px solid ${props => props.theme.colors.blue};
	display: inline-block;
`
export const StyledText = styled.p`
	font-size: 1rem;
	margin-top: 0;
`
