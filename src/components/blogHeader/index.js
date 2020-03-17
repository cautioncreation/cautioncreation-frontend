import React from 'react'
import { withTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Moment from 'react-moment'

import { Container, Row, Column } from '../grid'

import {
	StyledTitleContainer,
	StyledTitle,
	StyledImageColumn,
	StyledImage,
	StyledTextColumn,
	StyledArticleTitle,
	StyledArticleMeta,
	StyledArticleMetaText,
	StyledArticleExcerpt,
} from './style'

export const BlogHeader = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
		query blogHeaderQuery {
			allStrapiArticle {
		    edges {
		      node {
						title
						author {
							name
						}
						meta
						date
		        image {
		          childImageSharp {
		            fluid {
									...GatsbyImageSharpFluid
								}
		          }
		        }
		      }
		    }
		  }
		}
	`)

	console.log(data.allStrapiArticle.edges[0].node.content)

	return (
		<Container background={theme.colors.darkBlue}>
			<Row>
				<Column xs="12">
					<StyledTitleContainer>
						<StyledTitle>Featured Article</StyledTitle>
					</StyledTitleContainer>
				</Column>
			</Row>
			<Row>
				<StyledImageColumn xs="12" lg="7">
					<StyledImage
						sizes={{
							...data.allStrapiArticle.edges[0].node.image.childImageSharp.fluid,
							aspectRatio: 21/9
						}}
					/>
				</StyledImageColumn>
				<StyledTextColumn xs="12" lg="5">
					<StyledArticleTitle>
						{data.allStrapiArticle.edges[0].node.title}
					</StyledArticleTitle>
					<StyledArticleMeta>
						<StyledArticleMetaText>
							{data.allStrapiArticle.edges[0].node.author.name}
						</StyledArticleMetaText>
						<StyledArticleMetaText>
							<Moment date={data.allStrapiArticle.edges[0].node.date} interval={0} format="MMMM Do, YYYY" />
						</StyledArticleMetaText>
						<StyledArticleMetaText>
							Category
						</StyledArticleMetaText>
					</StyledArticleMeta>
					<StyledArticleExcerpt>
						{data.allStrapiArticle.edges[0].node.meta}
					</StyledArticleExcerpt>
				</StyledTextColumn>
			</Row>
		</Container>
	)
})
