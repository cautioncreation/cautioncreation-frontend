import styled from 'styled-components'

export const Card = styled.div`
	margin: 0 0 30px;
	position: relative;
	padding: 15px;
	border-radius: 15px;
	background: ${props => props.background ? props.background : props.theme.colors.background};
	box-shadow:  16px 16px 32px ${props => props.theme.colors.backgroundSecondary}, -16px -16px 32px ${props => props.theme.colors.background};
`
