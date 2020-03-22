import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row, Column } from '../../components/grid'
import { Accordion } from '../../components/accordion'

import {
	StyledQuestionColumn,
	StyledTitle,
	StyledLine,
	StyledText,
} from './style'

export const FrequentlyAskedQuestions = () => {
	const data = useStaticQuery(graphql`
    query frequentlyAskedQuestionsQuery {
			allMarkdownRemark(filter: {fields: {sourceName: {eq: "faqs"}}}) {
				edges {
					node {
						fields {
							sourceName
						}
						frontmatter {
							question
							answer
						}
					}
				}
			}
    }
  `)

	const frequentlyAskedQuestions = data.allMarkdownRemark.edges

	return (
		<SectionStatic>
			<Row>
				<Column xs="12" lg="4">
					<StyledTitle>
						Frequently Asked Questions
						<StyledLine />
					</StyledTitle>
				</Column>
				<StyledQuestionColumn xs="12" lg="8">
					<Row>
						{/*
						{frequentlyAskedQuestions.map(({ frontmatter }, i) => (
							<Column key={i} xs="12">
								<Accordion title={frontmatter.question}>
									<StyledText>
										{frontmatter.answer}
									</StyledText>
								</Accordion>
							</Column>
						))}
						*/}
					</Row>
				</StyledQuestionColumn>
			</Row>
		</SectionStatic>
	)
}
