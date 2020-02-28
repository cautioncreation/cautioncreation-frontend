import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledContainer = styled.section`
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
`

export const StyledBackground = styled(BackgroundImage)`
	display: flex;
	position: relative;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	height: ${props => props.height ? props.height : '100vh'};
	padding: 0;
	margin-left: -15px;
	margin-right: -15px;
	&:before {
		z-index: 0 !important;
		content: ""
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black !important;
		opacity: 0.5;
	}
`

export const StyledTextContainer = styled.div`
	padding: 15px;
`

export const StyledTitle = styled.h2`
	text-align: center;
	font-weight: 600;
	font-style: italic;
	margin: 0;
	color: ${props => props.light? props.theme.colors.white : null};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: left;
	}
`

export const StyledText = styled.h1`
	text-align: center;
	font-weight: 700;
	margin: 0;
	color: ${props => props.light? props.theme.colors.white : null};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3.25rem;
		text-align: left;
	}
`
