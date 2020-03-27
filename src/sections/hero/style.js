import styled from 'styled-components'
import StyledBackgroundImage from 'gatsby-background-image'

import {
	Column as StyledColumn,
	Section as StyledSection,
	ContainerStatic as StyledContainerStatic
} from '../../components/grid/style'

export const Container = styled(StyledSection)`
	padding-top: 0;
	padding-bottom: 0;
`

export const Background = styled(StyledBackgroundImage)`
	display: flex;
	position: relative;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	height: 100vh;
	padding: 0;
	margin-left: -15px;
	margin-right: -15px;
`

export const SmallBackground = styled(Background)`
	min-height: 35vh;
	height: auto;
	background-position: ${props => props.position} !important;
`

export const Tint = styled.span`
&:before {
	position: absolute;
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, ${props => props.darken});
}
`

export const TextColumn = styled(StyledColumn)`
	padding-top: 2rem;
	padding-bottom: 2rem;
`

export const Subtitle = styled.h2`
	text-align: center;
	font-weight: 700;
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0 0 1rem;
	color: ${props => props.theme.colors.white};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: left;
	}
`

export const Title = styled.h1`
	text-align: center;
	line-height: 1;
	font-family: ${props => props.theme.fonts.secondary};
	font-weight: 700;
	margin: 0;
	color: ${props => props.theme.colors.white};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3.25rem;
		text-align: left;
	}
`

export const CartoonContainer = styled(StyledSection)`
	background: ${props => props.theme.colors.mediumBlue};
`

export const CartoonContainerStatic = styled(StyledContainerStatic)`

`

export const CartoonTextColumn = styled(StyledColumn)`
	display: flex;
	justify-content: center;
	align-items: center;
	order: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 0;
	}
`

export const CartoonTextWrapper = styled.div`
	border-left: 4px solid ${props => props.theme.colors.yellow};
	padding-left: 10px;
`

export const CartoonSubTitle = styled.h3`
	color: ${props => props.theme.colors.white};
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2rem;
	}
`

export const CartoonTitle = styled.h1`
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0;
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3.5rem;
	}
`

export const CartoonVector = styled.img`
	max-width: 100%;
	max-height: 100%;
`
