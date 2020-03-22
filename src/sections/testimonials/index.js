import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { ContainerStatic, Row } from '../../components/grid'
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
			allMarkdownRemark {
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

	const testimonials = []

	data.allMarkdownRemark.edges.map(({ node }) => {
		if(node.fields.sourceName ==="testimonials") {
			testimonials.push(node)
		}
	})

	return (
		<ContainerStatic background={theme.colors.darkBlue}>
				<Row>
					<StyledColumn xs="12" lg="4">
						<StyledTitle>
							What Our Clients Are Saying
							<StyledLine />
						</StyledTitle>
					</StyledColumn>
					<StyledColumn xs="12" lg="8">
						<Slider interval="12" prefix="testimonials">
							{testimonials.map(({ frontmatter }, i) => (
								<StyledTestimonial key={frontmatter.id}>
									<StyledText>"{frontmatter.testimonial}"</StyledText>
									<StyledName>{frontmatter.name}</StyledName>
									<StyledCompany>
										<span>{frontmatter.position}</span> at <span>{frontmatter.company}</span>
									</StyledCompany>
								</StyledTestimonial>
							))}
						</Slider>
					</StyledColumn>
				</Row>
		</ContainerStatic>
	)
})
