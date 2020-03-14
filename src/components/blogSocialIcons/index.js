import React from 'react'

import { SocialIcons } from '../socialIcons'

import {
	StyledSocialContainer,
	StyledTitle,
	StyledSocialWrapper,
} from './style'

export const BlogSocialIcons = () => (
	<StyledSocialContainer>
		<StyledTitle>Follow us on social!</StyledTitle>
		<StyledSocialWrapper>
			<SocialIcons />
		</StyledSocialWrapper>
	</StyledSocialContainer>
)
