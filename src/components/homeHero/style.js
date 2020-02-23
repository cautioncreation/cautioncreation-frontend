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
	bottom: 0;
	left: 0;
	right: 0;
	padding: 4px 16px;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-around;
	@media (min-width: ${props => props.theme.breakpoints.md}) {
		justify-content: flex-start;
	}
`

export const StyledSocialLink = styled.a`
	transition: all 1s;

	&:hover {
		transform: scale(1.1) rotate(360deg);
	}
`

export const StyledSocialIcon = styled.img`
	width: 40px;
	height: 40px;
	margin: 0px 16px;
`

export const StyledArrowContainer = styled.div`
	position: absolute;
	bottom: 48px;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledArrowText = styled.span`
	color: ${props => props.theme.colors.lightGrey};
	font-weight: 700;
	font-size: 1.25rem;
`

export const StyledArrowIcon = styled.img`
	width: 48px;
	height: 48px;
	position: relative;
	right: 0px;
	animation: arrowMove .85s infinite alternate;

	@keyframes arrowMove {
		from {top: -5px;}
		to {top: 5px;}
	}
`
