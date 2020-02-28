import React from 'react'
import { withTheme } from 'styled-components'


import { ContainerStatic } from '../grid'
import Pushpin from '../../images/svg/pushpin.svg'

import {
	StyledContainer,
	StyledTitle,
	StyledPin,
	StyledText,
	StyledLine,
} from './style'

export const Header = withTheme(({ title, text, theme }) => (
	<ContainerStatic>
		<StyledContainer>
			<StyledTitle>
				<StyledPin src={Pushpin}/>
				{title}
			</StyledTitle>
			<StyledText>{text}</StyledText>
			<StyledLine/>
		</StyledContainer>
	</ContainerStatic>
))
