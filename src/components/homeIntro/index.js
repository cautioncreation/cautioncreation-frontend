import React from 'react'

import { ContainerStatic, Row, Column } from '../grid'
import { HeaderClose } from '../header'

import { StyledText } from './style'

export const HomeIntro = () => (
	<ContainerStatic>
		<HeaderClose
			title="Edmonton Web Development"
			text="Development · Branding & Design · Maintenance"
		/>
		<StyledText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
		</StyledText>
	</ContainerStatic>

)
