import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledContainer = styled.section`
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
`

export const StyledBackground = styled(BackgroundImage)`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	height: 100vh;
	padding: 0;
	padding-top: 64px;
	margin-left: -15px;
	margin-right: -15px;
`
