import styled from 'styled-components'
import Image from 'gatsby-image'

import { StyledRow as Row } from '../../components/grid/style'

export const StyledRow = styled(Row)`
	padding-bottom: 4rem;
`
export const StyledImage = styled(Image)`
	border-radius: 10px;
`
export const StyledTextWrapper = styled.div`
	padding-top: 1rem;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding-top: 0;
	}
`
export const StyledTitle = styled.h2`
	margin-top: 0;
`
export const StyledMetaWrapper = styled.div`

`
export const StyledMetaText = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0;
`
