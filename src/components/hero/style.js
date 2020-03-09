import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import {
	StyledColumn as Column,
	StyledContainer as Container,
	StyledContainerStatic as ContainerStatic
} from '../grid/style'

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
	height: 100vh;
	padding: 0;
	margin-left: -15px;
	margin-right: -15px;
`

export const StyledSmallBackground = styled(StyledBackground)`
	min-height: 35vh;
	height: auto;
	background-position: ${props => props.position} !important;
`

export const StyledTint = styled.span`
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

export const StyledTextColumn = styled(Column)`
	padding-top: 2rem;
	padding-bottom: 2rem;
`

export const StyledSubtitle = styled.h2`
	text-align: center;
	font-weight: 700;
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0 0 1rem;
	color: ${props => props.theme.colors.white};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: left;
	}
`

export const StyledTitle = styled.h1`
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

export const StyledCartoonContainer = styled(Container)`
	background: ${props => props.theme.colors.mediumBlue};
`

export const StyledCartoonContainerStatic = styled(ContainerStatic)`

`

export const StyledCartoonTextColumn = styled(Column)`
	display: flex;
	justify-content: center;
	align-items: center;
	order: 1;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 0;
	}
`

export const StyledCartoonTextWrapper = styled.div`
	border-left: 4px solid ${props => props.theme.colors.yellow};
	padding-left: 10px;
`

export const StyledCartoonSubTitle = styled.h3`
	color: ${props => props.theme.colors.white};
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2rem;
	}
`

export const StyledCartoonTitle = styled.h1`
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.secondary};
	margin: 0;
	font-weight: 600;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 3.5rem;
	}
`

export const StyledCartoonVector = styled.img`
	max-width: 100%;
	max-height: 100%;
`
