import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionStatic, Column } from '../../components/grid'

import * as S from './style'

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
				<S.Row>
					<Column xs="0" lg="1.5" spacer />
					<Column xs="12" lg="4">
						<a href={"/blog/" + node.fields.slug}>
							<S.BlogImage sizes={{...node.frontmatter.image.childImageSharp.fluid, aspectRatio: 21/9}} />
						</a>
					</Column>
					<Column xs="12" lg="5">
						<S.TextWrapper>
							<a href={"/blog/" + node.fields.slug}>
								<S.Title>{node.frontmatter.title}</S.Title>
							</a>
							<S.MetaWrapper>
								<S.MetaText>
									Author: {node.frontmatter.author}
								</S.MetaText>
								<S.MetaText>
									Published: {node.frontmatter.date}
								</S.MetaText>
							</S.MetaWrapper>
						</S.TextWrapper>
					</Column>
					<Column xs="0" lg="1.5" spacer />
				</S.Row>
			))}

		</SectionStatic>
	)
}
