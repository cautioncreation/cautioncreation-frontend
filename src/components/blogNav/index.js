import React from "react"

import { BlogNavMenu } from './blogNavMenu'
import Logo from "../../images/svg/logo.svg"

import * as S from './style'

export const BlogNav = () => (
	<S.Nav>
		<S.Brand href="/">
			<S.Logo src={Logo} alt="Logo"/>
		</S.Brand>
		<BlogNavMenu />
	</S.Nav>
)
