import styled from 'styled-components'

export const Title = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		text-align: left;
		font-size: 3rem;
	}
`

export const MetaContainer = styled.div`
	display: flex;
	align-items: center;
`

export const MetaTextContainer = styled.div`
	display: inline-block;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`

export const Portrait = styled.div`
	width: 60px;
	height: 60px;
	background: ${props => props.theme.colors.lightGrey};
	border-radius: 50%;
	margin-right: 15px;
	display: inline-block;
`

export const Author = styled.h4`
	margin: 0 0 0.5rem;
`

export const Date = styled.h4`
margin: 0;
`
