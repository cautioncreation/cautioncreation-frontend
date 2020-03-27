import React from 'react'
import Image from 'gatsby-image'

import { ContainerStatic, Row, Column } from '../grid'

import { BlogSocialIcons } from '../blogSocialIcons'

import * as S from './style'

export const ArticleHeader = ({ data }) => (
	<ContainerStatic>
		<Row>
			<Column xs="0" lg="1.5" spacer />
			<Column xs="12" lg="9">
				<Row>
					<Column xs="12">
						<Image sizes={{ ...data.image.childImageSharp.fluid, aspectRatio: 21/9 }} alt={data.alt} />
					</Column>
					<Column xs="12">
						<S.Title>{data.title}</S.Title>
						<S.MetaContainer>
							<S.Portrait />
							<S.MetaTextContainer>
								<S.Author>Author: <span>{data.author}</span></S.Author>
								<S.Date>
									Published: {data.date}
								</S.Date>
							</S.MetaTextContainer>
						</S.MetaContainer>
					</Column>
					<Column xs="12">
						<BlogSocialIcons />
					</Column>
				</Row>
			</Column>
			<Column xs="0" lg="1.5" spacer />
		</Row>

	</ContainerStatic>
)
