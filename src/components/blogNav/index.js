import React, { useState, useLayoutEffect } from "react"

import { BlogNavMenu } from '../blogNavMenu'
import Logo from "../../images/svg/logo.svg"

import {
	StyledNav,
	StyledBrand,
	StyledLogo,
} from './style'

export const BlogNav = () => (
	<StyledNav>
		<StyledBrand href="/">
			<StyledLogo src={Logo} alt="Logo"/>
		</StyledBrand>
		<BlogNavMenu />
	</StyledNav>
)
