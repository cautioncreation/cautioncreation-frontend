import React from 'react'

import * as S from './style'

export const Card = ({ children, background }) => (
	<S.Card background={background}>
		{children}
	</S.Card>
)
