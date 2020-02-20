import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


export const StyledBackground = styled(BackgroundImage)`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
export const StyledTopText = styled.p`
	font-style: italic;
	font-size: 1.5rem;
	margin: 0;
	padding-top: 2.5rem;
	text-align: center;
	color: ${props => props.theme.colors.white};
`
export const StyledTitle = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin: 0;
	text-align: center;
	font-family: ${props => props.theme.fontPrimary};
	color: ${props => props.theme.colors.white};
`
export const StyledBottomText = styled.p`
	font-size: 1.5rem;
	margin: 0;
	padding: 0.5rem 0 2rem;
	text-align: center;
	color: ${props => props.theme.colors.white};
`
