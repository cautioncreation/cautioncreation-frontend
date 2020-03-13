import styled from 'styled-components'

export const StyledTitle = styled.h1`
	font-size: 3.5rem;
`

export const StyledMetaContainer = styled.div`
	display: flex;
	align-items: center;
`

export const StyledMetaTextContainer = styled.div`
	display: inline-block;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`

export const StyledPortrait = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-right: 15px;
	background: ${props => props.theme.colors.mediumGrey};
	display: inline-block;
`

export const StyledAuthor = styled.h4`
	margin: 0 0 0.5rem;
`

export const StyledDate = styled.h4`
margin: 0;
`
