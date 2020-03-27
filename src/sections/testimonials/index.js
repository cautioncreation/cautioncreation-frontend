import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row } from '../../components/grid'
import { Slider } from '../../components/slider'

import {
	StyledColumn,
	StyledTitle,
	StyledLine,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany,
} from './style'

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
					<StyledColumn xs="12" lg="4">
						<StyledTitle>
							What Our Clients Are Saying
							<StyledLine />
						</StyledTitle>
					</StyledColumn>
					<StyledColumn xs="12" lg="8">
						<Slider interval="12" prefix="testimonials">
							{data.allMarkdownRemark.edges.map(({ node }, i) => (
								<StyledTestimonial key={node.frontmatter.id}>
									<StyledText>"{node.frontmatter.testimonial}"</StyledText>
									<StyledName>{node.frontmatter.name}</StyledName>
									<StyledCompany>
										<span>{node.frontmatter.position}</span> at <span>{node.frontmatter.company}</span>
									</StyledCompany>
								</StyledTestimonial>
							))}
						</Slider>
					</StyledColumn>
				</Row>
		</SectionStatic>
	)
})
