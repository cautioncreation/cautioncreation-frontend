import React, {useState} from 'react'

import * as S from './style'

export const FooterItem = ({ title, children, open }) => {
	const [isActive, setIsActive] = useState(open === true ? true : false)

	function handleClick() {
		setIsActive(isActive === false ? true : false)
	}
	return (
		<S.Wrapper>
			<S.HeaderContainer active={isActive} onClick={handleClick}>
				<S.Title>{title}</S.Title>
					<S.Vector viewBox="0 0 100 100">
			  		<S.Rect active={isActive} x="45" y="10" width="10" height="80" ry="7.5" />
			  		<S.Rect active={isActive} x="10" y="45" width="80" height="10" ry="7.5" />
					</S.Vector>
			</S.HeaderContainer>
			<S.TextContainer active={isActive}>
				{children}
			</S.TextContainer>
		</S.Wrapper>
	)
}
