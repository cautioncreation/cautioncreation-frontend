import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Moment from 'react-moment'

import { SectionStatic, Column } from '../grid'

import {
	StyledRow,
	StyledImage,
	StyledTextWrapper,
	StyledTitle,
	StyledMetaWrapper,
	StyledMetaText,
} from './style'

export const BlogList = () => {
	const data = useStaticQuery(graphql`
			query blogListQuery {
				allStrapiArticle {
					edges {
						node {
							title
							meta
							author {
								name
							}
							fields {
								slug
							}
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
	const articles = data.allStrapiArticle.edges.reverse()
	return (
		<SectionStatic>

			{articles.map(({ node }) => (
				<StyledRow>
					<Column xs="0" lg="1.5" spacer />
					<Column xs="12" lg="4">
						<a href={"/blog/" + node.fields.slug}>
							<StyledImage sizes={{...node.image.childImageSharp.fluid, aspectRatio: 21/9}} />
						</a>
					</Column>
					<Column xs="12" lg="5">
						<StyledTextWrapper>
							<a href={"/blog/" + node.fields.slug}>
								<StyledTitle>{node.title}</StyledTitle>
							</a>
							<StyledMetaWrapper>
								<StyledMetaText>
									Author: {node.author.name}
								</StyledMetaText>
								<StyledMetaText>
									Published: <Moment date={node.date} interval={0} format="MMMM Do, YYYY" />
								</StyledMetaText>
							</StyledMetaWrapper>
						</StyledTextWrapper>
					</Column>
					<Column xs="0" lg="1.5" spacer />
				</StyledRow>
			))}

		</SectionStatic>
	)
}
