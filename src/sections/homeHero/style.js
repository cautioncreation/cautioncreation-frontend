import styled from 'styled-components'

import { Column as StyledColumn } from '../../components/grid/style'

export const HeroColumn = styled(StyledColumn)`
	height: 100%;
	padding-top: 64px;
	padding-bottom: 54px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

`

export const Title = styled.h1`
	text-align: center;
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.white};
	font-size: 2.5rem;
	margin: 0 0 1rem;
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3.5rem;
	}
`

export const Text = styled.p`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 1.125rem;
	margin: 0 0 2rem;
	font-weight: 400;
	font-family: ${props => props.theme.fontPrimary};
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 2rem;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SocialContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 4px 16px;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-between;
	@media (min-width: ${props => props.theme.breakpoints.md}) {
		justify-content: flex-start;
	}
`

export const ArrowContainer = styled.div`
	position: absolute;
	bottom: 48px;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ArrowText = styled.span`
	display: none;
	color: ${props => props.theme.colors.lightGrey};
	font-weight: 700;
	font-size: 1.25rem;
	@media (min-width: ${props => props.theme.breakpoints.md}) {
		display: inline;
	}
`

export const ArrowIcon = styled.img`
	width: 48px;
	height: 48px;
	position: relative;
	animation-timing-function: ease-out;
	animation: arrowMove .85s infinite alternate;



	@keyframes arrowMove {
		from {top: -5px;}
		to {top: 0px;}
	}
`
