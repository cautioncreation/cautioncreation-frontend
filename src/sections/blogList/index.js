import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionStatic, Column } from '../../components/grid'

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
				allMarkdownRemark(filter: {fields: {sourceName: {eq: "articles"}}}) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
								meta
								author
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
			}
	`)
	console.log(data)
	const articles = data.allMarkdownRemark.edges.reverse()
	return (
		<SectionStatic>

			{articles.map(({ node }) => (
				<StyledRow>
					<Column xs="0" lg="1.5" spacer />
					<Column xs="12" lg="4">
						<a href={"/blog/" + node.fields.slug}>
							<StyledImage sizes={{...node.frontmatter.image.childImageSharp.fluid, aspectRatio: 21/9}} />
						</a>
					</Column>
					<Column xs="12" lg="5">
						<StyledTextWrapper>
							<a href={"/blog/" + node.fields.slug}>
								<StyledTitle>{node.frontmatter.title}</StyledTitle>
							</a>
							<StyledMetaWrapper>
								<StyledMetaText>
									Author: {node.frontmatter.author}
								</StyledMetaText>
								<StyledMetaText>
									Published: {node.frontmatter.date}
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
