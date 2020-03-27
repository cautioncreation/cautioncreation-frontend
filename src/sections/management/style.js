import styled from 'styled-components'
import StyledImage from 'gatsby-image'

export const ImageWrapper = styled.div`
	overflow: hidden;
	max-height: 100%;
`

export const Image = styled(StyledImage)`
`

export const TextWrapper = styled.div`
	height: 100%;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		align-items: center;
		padding: 0;
	}
`
export const Title = styled.h1`
	padding-left: 10px;
	text-align: center;
	margin: 0 0 1.5rem;
	display: inline-block;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3rem;
	}
`
export const Text = styled.p`
	font-size: 1.125rem;
	margin-top: 0;
	text-align: center;
`
