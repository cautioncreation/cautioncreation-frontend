import React from 'react'
import Image from 'gatsby-image'

import { ContainerStatic, Container, Row, Column } from '../grid'

import { BlogSocialIcons } from '../blogSocialIcons'

import {
	StyledTitle,
	StyledMetaContainer,
	StyledMetaTextContainer,
	StyledPortrait,
	StyledAuthor,
	StyledDate,
} from './style'

export const ArticleHeader = ({ data }) => (
	<ContainerStatic>
		<Row>
			<Column xs="12">
				<StyledTitle>{data.title}</StyledTitle>
				<StyledMetaContainer>
					<StyledPortrait />
					<StyledMetaTextContainer>
						<StyledAuthor>Author: {data.author.username}</StyledAuthor>
						<StyledDate>Published On: July 5th, 2020</StyledDate>
					</StyledMetaTextContainer>
				</StyledMetaContainer>
			</Column>
			<Column xs="12">
				<Image fluid={data.image.childImageSharp.fluid} />
			</Column>
			<Column xs="12">
				<BlogSocialIcons />
			</Column>
		</Row>
	</ContainerStatic>
)
