import styled from 'styled-components'
import Pushpin from '../../images/svg/pushpin.svg'
import Image from 'gatsby-image'

import { StyledColumn as Column } from '../grid/style'

export const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const StyledTitle = styled.h1`
	margin: 0;
	position: relative;
	color: ${props => props.theme.colors.white};
	display: inline;

	&:before {
	  content: "";
	  display:block;
		position: absolute;
		left: -50px;
		top: 2px;
	  height: 40px;
		width: 45px;
		background-size: 45px 40px;
	  background-image: url(${Pushpin});
	  background-repeat: no-repeat;
	}

	&:after {
		content: "";
		display: block;
		border-bottom: 4px solid ${props => props.theme.colors.yellow};
	}

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: 2.5rem;
		&:before {
			top: 6px;
		}
	}
`

export const StyledImageColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		order: 1;
		padding: 2rem 2rem 2rem 1rem;
	}
`

export const StyledImage = styled(Image)`
	border-radius: 15px;
`

export const StyledTextColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		padding: 2rem 1rem 2rem 2rem;
	}
`

export const StyledArticleTitle = styled.h1`
	margin-top: 0;
`
export const StyledArticleMeta = styled.div`
	display: flex;
	justify-content: space-around;
`
export const StyledArticleMetaText = styled.h4`
	display: inline;
	margin: 0;
`

export const StyledArticleExcerpt = styled.p`
	word-wrap: break-word;
`
