import React from 'react'


import { ContainerStatic } from '../grid'
import Pushpin from '../../images/svg/pushpin.svg'

import {
	StyledContainer,
	StyledTitle,
	StyledPin,
	StyledText,
	StyledLine,
} from './style'

export const Header = ({ title, text }) => (
	<ContainerStatic>
		<StyledContainer>
			<StyledTitle>
				<StyledPin src={Pushpin}/>
				{title}
			</StyledTitle>
			<StyledText>{text}</StyledText>
			<StyledLine />
		</StyledContainer>
	</ContainerStatic>
)
