import styled from 'styled-components'
import Image from 'gatsby-image'

export const StyledTitle = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: left;
		font-size: 3.5rem;
	}
`

export const StyledMetaContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
`

export const StyledMetaTextContainer = styled.div`
	display: inline-block;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`

export const StyledPortrait = styled(Image)`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-right: 15px;
	display: inline-block;
`

export const StyledAuthor = styled.h4`
	margin: 0 0 0.5rem;
`

export const StyledDate = styled.h4`
margin: 0;
`
