import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { StyledContainer as Container } from '../grid/style'

export const StyledContainer = styled(Container)`
	margin-top: 0;
	margin-bottom: 0;
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
