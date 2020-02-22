import styled from 'styled-components'

import {
	StyledColumn as Column,
	StyledContainer as Container,
	StyledContainerStatic as ContainerStatic
} from '../grid/style'

export const StyledContainer = styled(Container)`
	background: ${props => props.theme.gradients.black};
`

export const StyledContainerStatic = styled(ContainerStatic)`

`

export const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 40px;
	padding-bottom: 40px;
`

export const StyledSVG = styled.img`
	
`
export const StyledTitle = styled.h1`
	color: ${props => props.theme.colors.white};
	margin-bottom: 0;
	font-weight: 500;
	text-align: center;
`
export const StyledText = styled.p`
	color: ${props => props.theme.colors.white};
	font-size: 1.5rem;
	margin-bottom: 0;
	text-align: center;
`
