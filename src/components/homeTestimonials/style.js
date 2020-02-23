import styled from 'styled-components'

import {
	StyledColumn as Column,
	StyledSection as Section,
	StyledContainerStatic as ContainerStatic,
} from '../grid/style'

export const StyledSection = styled(Section)`
	background: ${props => props.theme.colors.darkBlue};
	padding-bottom: 40px;
`

export const StyledContainerStatic = styled(ContainerStatic)`

`

export const StyledColumn = styled(Column)`
	display: flex;
	padding-top: 1rem;
	justify-content: center;
	align-items: center;
`


export const StyledTitle = styled.h1`
	font-size: 2.5rem;
	color: ${props => props.theme.colors.white};
	font-weight: 700;
	text-align: center;
	margin: 0;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3rem;
	}
`

export const StyledLine = styled.hr`
	margin: 0.5rem auto 0;
	width: 40%;
	border: none;
	border-bottom: 5px solid ${props => props.theme.colors.yellow};
`
