import React from 'react'

import {
	StyledCard,
	StyledImage,
	StyledTitle,
} from './style'

export const BlogCard = () => (
	<StyledCard>
		<StyledImage fluid={image} />
		<StyledTitle>{title}</StyledTitle>
		<StyledMetaContainer>
			<StyledMetaText>{author}</StyledMetaText>
			<StyledMetaText>{date}</StyledMetaText>
			<StyledMetaText>Category</StyledMetaText>
		</StyledMetaContainer>
		<StyledButton>Read Article</StyledButton>
	</StyledCard>
)
