import React from 'react'

import {
	StyledCard,
} from './style'

export const Card = ({ children, background }) => (
	<StyledCard background={background}>
		{children}
	</StyledCard>
)
