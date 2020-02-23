import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 2rem;
	margin: 0;
	margin-bottom: 1rem;
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3.5rem;
	}
`

export const StyledText = styled.h4`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 1.5rem;
	margin: 0;
	line-height: 1.25;
	margin-bottom: 2rem;
	font-weight: 400;
	font-family: ${props => props.theme.fontPrimary};
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 2rem;
	}
`

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`

export const StyledSocialContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding:
	display: none;
	padding: 4px 16px;
	border-radius: 28px;
	background: rgba(0, 0, 0, 0.5);
	@media (min-width: ${props => props.theme.breakpoints.md}) {
		display: flex;
	}
`

export const StyledSocialIcon = styled.img`
	width: 40px;
	height: 40px;
	margin: 0px 16px;
`
