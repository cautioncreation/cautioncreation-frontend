import styled from 'styled-components'

export const PageTitle = styled.h1`
	margin: 0 0 3rem;
	font-size: 3rem;
	font-weight: 600;
	font-family: ${props => props.theme.fonts.secondary};
	border-left: 4px solid ${props => props.theme.colors.lightBlue};
	padding-left: 10px;
`

export const InfoContainer = styled.div`
	text-align: right;
	padding-bottom: 1rem;
`

export const Title = styled.h1`
	margin: 0 0 0.5rem;
	font-size: 2rem;
	font-weight: 600;
	font-family: ${props => props.theme.fonts.secondary};
`

export const Info = styled.a`
	font-size: 1.25rem;
`
