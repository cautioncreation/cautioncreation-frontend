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
        		html
        		frontmatter {
          		question
        		}
      		}
    		}
  		}
    }
  `)

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
						{data.allMarkdownRemark.edges.map(({ node }, i) => (
							<Column key={i} xs="12">
								<Accordion title={node.frontmatter.question}>
									<StyledText dangerouslySetInnerHTML={{__html: node.html}}>
									</StyledText>
								</Accordion>
							</Column>
						))}
					</Row>
				</StyledQuestionColumn>
			</Row>
		</SectionStatic>
	)
}
