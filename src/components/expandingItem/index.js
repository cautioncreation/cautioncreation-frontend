import React from 'react'

import { Column } from '../grid'
import {
	StyledImageWrapper,
	StyledImage,
	StyledTitle
} from './style'

export const ExpandingItem = ({src, title}) => (
	<Column xs='6' md='4' xl='2'>
		<StyledImageWrapper>
			<StyledImage src={src} alt='process-icon'/>
		</StyledImageWrapper>
		<StyledTitle>{title}</StyledTitle>
	</Column>
)
