import styled from 'styled-components'

export const StyledTitle = styled.h1`
	text-align: center;
	margin: 1rem 0;
`
export const StyledSubtext = styled.h4`
	text-align: center;
	margin: 0 0 0.5rem;
`
export const StyledPrice = styled.h1`
	text-align: center;
	margin: 0 0 1rem;
	font-weight: 700;
`
export const StyledParagraph = styled.p`
	text-align: center;
	padding: 0 15px;
`
export const StyledSubtitle = styled.h2`
	text-align: center;
	margin: 0 0 1rem;
`
export const StyledScrollWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 2rem;
`
export const StyledScrollContainer = styled.div`
	padding-right: 10px;
	display: inline-block;
	max-height: 10rem;
	overflow-y: auto;
	position: relative;
	&::-webkit-scrollbar {
  	width: 5px;
	}
	&::-webkit-scrollbar-track {
	  background: none;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2.5px;
	  background-color: ${props => props.theme.colors.lightGrey};
	}
`
export const StyledScrollText = styled.p`
	margin-top: 0;
	&:before {
		content: "\u2713";
		font-weight: 700;
		padding: 0 0.2745rem;
		color: ${props => props.theme.colors.green};
		margin-right: 5px;
		border-radius: 50%;
		background: ${props => props.theme.colors.mediumGrey};
	}
`
export const StyledLinkContainer = styled.div`
	display: flex;
	align-items: flex-end;
	padding: 0 15px;
`
export const StyledLink = styled.a`
	display: inline-block;
	margin-left: auto;
	text-align: right;
	font-size: 1.5rem;
	padding: 0 10px;
	border-radius: 1rem;
	font-weight: 700;
	color: ${props => props.theme.colors.blue};
	&:after {
		vertical-align: middle;
		content: "\u27a4";
		margin-left: 10px;
		color: ${props => props.theme.colors.blue};
		font-size: 1.25rem;
	}

	&:hover {
		&:after {
			position: relative;
			animation-timing-function: ease-in;
			animation: linkArrowMove .5s infinite alternate;
		}
	}
	@keyframes linkArrowMove {
		from {left: 0;}
		to {left: 5px;}
	}
`
