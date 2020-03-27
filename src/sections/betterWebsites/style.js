import styled from 'styled-components'

import * as S from '../../components/grid/style'

export const Row = styled(S.StyledRow)`
	padding-left: 15px;
	padding-right: 15px;
`

export const Header = styled.h1`
	text-align: center;
	margin: 1.5rem 0 3rem;
	font-weight: 600;
	font-size: 2.5rem;
`

export const Column = styled(S.StyledColumn)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 40px;
`

export const Image = styled.img`
	height: 80px;
	margin-bottom: 1rem;
`

export const Title = styled.h1`
	text-align: center;
	margin: 0;
`

export const Text = styled.p`
	text-align: center;
	color: ${props => props.theme.colors.black};
`
