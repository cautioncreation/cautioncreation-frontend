import styled from 'styled-components'

import {
	StyledColumn as Column,
	StyledContainer as Container,
	StyledContainerStatic as ContainerStatic
} from '../grid/style'

export const StyledContainer = styled(Container)`
	background: ${props => props.theme.gradients.black};
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
	font-size: 3rem;
	color: ${props => props.theme.colors.white};
	font-weight: 700;
	text-align: center;
	margin: 0;
`

export const StyledLine = styled.hr`
	margin: 0.5rem auto 0;
	width: 40%;
	border: none;
	border-bottom: 5px solid ${props => props.theme.colors.yellow};
`
