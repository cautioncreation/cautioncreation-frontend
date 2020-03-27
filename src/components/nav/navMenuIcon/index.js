import React, {useState} from 'react'

import * as S from './style'

export const NavMenuIcon = (props) => {
	const [className, setClassName] = useState(false)

	function handleClick() {
		props.onClick()
		setClassName(className === false ? "active" : false)
	}


	return (
		<S.Button onClick={handleClick} aria-label="Open Menu">
			<S.Vector viewBox="0 0 100 100" alt="Menu">
	  		<S.Rect1 className={className} x="10" y="20" width="80" height="10" ry="7.5" />
	  		<S.Rect2 className={className} x="10" y="45" width="80" height="10" ry="7.5" />
		  	<S.Rect3 className={className} x="10" y="70" width="80" height="10" ry="7.5" />
			</S.Vector>
		</S.Button>
	)
}
