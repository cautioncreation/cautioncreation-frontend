import React, {useState} from 'react'

import {
	StyledButton,
	StyledVector,
	StyledRect1,
	StyledRect2,
	StyledRect3,
} from './style'

export const MenuIcon = (props) => {
	const [className, setClassName] = useState(false)

	function handleClick() {
		props.onClick()
		setClassName(className === false ? "active" : false)
	}


	return (
		<StyledButton onClick={handleClick} name="Menu">
			<StyledVector viewBox="0 0 100 100">
	  		<StyledRect1 className={className} x="10" y="20" width="80" height="10" ry="7.5" />
	  		<StyledRect2 className={className} x="10" y="45" width="80" height="10" ry="7.5" />
		  	<StyledRect3 className={className} x="10" y="70" width="80" height="10" ry="7.5" />
			</StyledVector>
		</StyledButton>
	)
}
