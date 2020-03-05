import styled from 'styled-components'

export const StyledCard = styled.div`
	height: 100%;
	margin-bottom: 30px;
	padding: 15px;
	border-radius: 15px;
	background: ${props => props.background ? props.background : "#ffffff"};
	box-shadow:  16px 16px 32px #c9c9c9,
             -16px -16px 32px #ffffff;
`
