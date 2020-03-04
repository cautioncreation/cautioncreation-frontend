import styled from 'styled-components'
import Image from 'gatsby-image'

export const StyledTitle = styled.h1`
	text-align: center;
	font-weight: 700;
	margin: 0 0 3rem;
	font-family: ${props => props.theme.fonts.secondary};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3rem;
	}
`

export const StyledWrapperLink = styled.a`
	display: block;
`

export const StyledBackground = styled(Image)`
	margin-bottom: 30px;
	border-radius: 1rem;
`

export const StyledTextContainer = styled.div`
	margin-bottom: 3rem;
	border-radius: 1rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: flex;
		margin-bottom: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: absolute;
		top: 0;
		left: 15px;
		right: 15px;
		bottom: 30px;
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.6);
		&:hover {
			opacity: 1;
		}
		transition: opacity 0.8s;
	}
`

export const StyledService = styled.h4`
	margin-bottom: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		color: ${props => props.theme.colors.white};
	}
`

export const StyledCompany = styled.h1`
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
		color: ${props => props.theme.colors.white};
	}
`

export const StyledDescription = styled.p`
	margin-top: 0.5rem;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		color: ${props => props.theme.colors.white};
	}
`
