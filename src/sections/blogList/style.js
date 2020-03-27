import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'

import * as S from '../../components/grid/style'

export const Row = styled(S.Row)`
	padding-bottom: 4rem;
`
export const BlogImage = styled(GatsbyImage)`
	border-radius: 10px;
`
export const TextWrapper = styled.div`
	padding-top: 1rem;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding-top: 0;
	}
`
export const Title = styled.h2`
	margin-top: 0;
`
export const MetaWrapper = styled.div`

`
export const MetaText = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0;
`
