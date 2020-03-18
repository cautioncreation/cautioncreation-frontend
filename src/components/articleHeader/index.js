import React from 'react'
import Image from 'gatsby-image'
import Moment from 'react-moment'

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

export const ArticleHeader = ({ data, author }) => (
	<ContainerStatic>
		<Row>
			<Column xs="12">
				<StyledTitle>{data.title}</StyledTitle>
				<StyledMetaContainer>
					<StyledPortrait fluid={author.avatar.childImageSharp.fluid} alt="Author Avatar"/>
					<StyledMetaTextContainer>
						<StyledAuthor>Author: <span>{author.name}</span></StyledAuthor>
						<StyledDate>
							Published: <Moment date={data.createdAt} interval={0} format="MMMM Do, YYYY" />
						</StyledDate>
					</StyledMetaTextContainer>
				</StyledMetaContainer>
			</Column>
			<Column xs="12">
				<Image sizes={{ ...data.image.childImageSharp.fluid, aspectRatio: 21/9 }} alt={data.alt} />
			</Column>
			<Column xs="12">
				<BlogSocialIcons />
			</Column>
		</Row>
	</ContainerStatic>
)
