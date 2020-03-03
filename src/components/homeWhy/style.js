import styled from 'styled-components'

import {
	StyledColumn as Column,
	StyledSection as Section,
	StyledContainerStatic as ContainerStatic
} from '../grid/style'

export const StyledSection = styled(Section)`
	background: ${props => props.theme.colors.darkBlue};
`

export const StyledContainerStatic = styled(ContainerStatic)`

`

export const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
`

export const StyledSVG = styled.img`
	width: 60px;
	height: 60px;
`
export const StyledTitle = styled.h2`
	color: ${props => props.theme.colors.white};
	margin-bottom: 0;
	font-weight: 600;
	text-align: center;
`
export const StyledText = styled.p`
	color: ${props => props.theme.colors.white};
	font-size: 1.125rem;
	margin-bottom: 0;
	text-align: center;
`
