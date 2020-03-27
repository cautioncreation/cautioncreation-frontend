import styled from 'styled-components'

import * as S from '../../components/grid/style'

export const Title = styled.h1`
	color: ${props => props.theme.colors.white};
	margin: 0;
	text-align: center;
	font-weight: 600;
	margin-bottom: 1rem;
	font-family: ${props => props.theme.fonts.secondary};
`

export const Text = styled.h2`
	color: ${props => props.theme.colors.white};
	margin: 0;
	text-align: center;
`

export const Row = styled(S.Row)`
	padding-top: 3rem;
	padding-bottom: 3rem;
`

export const Column = styled(S.Column)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: 1rem;
	padding-bottom: 1rem;
`
