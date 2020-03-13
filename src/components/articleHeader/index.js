import React from 'react'
import Image from 'gatsby-image'

import { ContainerStatic, Row, Column } from '../grid'

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
			<Column xs="0" xl="1" spacer />
			<Column xs="12" xl="10">
				<Image fluid={data.image.childImageSharp.fluid} />
				<Row>
					<Column xs="12" lg="8">
						<StyledTitle>Where to find Gatsby Developers</StyledTitle>
						<StyledMetaContainer>
							<StyledPortrait />
							<StyledMetaTextContainer>
								<StyledAuthor>Author: {data.author.username}</StyledAuthor>
								<StyledDate>Published On: July 5th, 2020</StyledDate>
							</StyledMetaTextContainer>
						</StyledMetaContainer>

					</Column>
					<Column xs="12" lg="4">

					</Column>
				</Row>
			</Column>
			<Column xs="0" xl="1 " spacer />
		</Row>
	</ContainerStatic>
)
