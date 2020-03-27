import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row } from '../../components/grid'
import { Slider } from '../../components/slider'

import * as S from './style'

export const Testimonials = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
    query testimonialsQuery {
			allMarkdownRemark(filter: {fields: {sourceName: {eq: "testimonials"}}}) {
				edges {
					node {
						fields {
							sourceName
						}
						frontmatter {
							testimonial
							name
							position
							company
						}
					}
				}
			}
    }
  `)

	return (
		<SectionStatic background={theme.colors.darkBlue}>
				<Row>
					<S.Column xs="12" lg="4">
						<S.Title>
							What Our Clients Are Saying
							<S.Line />
						</S.Title>
					</S.Column>
					<S.Column xs="12" lg="8">
						<Slider interval="12" prefix="testimonials">
							{data.allMarkdownRemark.edges.map(({ node }, i) => (
								<S.Testimonial key={node.frontmatter.id}>
									<S.Text>"{node.frontmatter.testimonial}"</S.Text>
									<S.Name>{node.frontmatter.name}</S.Name>
									<S.Company>
										<span>{node.frontmatter.position}</span> at <span>{node.frontmatter.company}</span>
									</S.Company>
								</S.Testimonial>
							))}
						</Slider>
					</S.Column>
				</Row>
		</SectionStatic>
	)
})
