import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row, Column } from '../../components/grid'
import { Accordion } from '../../components/accordion'

import * as S from './style'

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
					<S.Title>
						Frequently Asked Questions
						<S.Line />
					</S.Title>
				</Column>
				<S.QuestionColumn xs="12" lg="8">
					<Row>
						{data.allMarkdownRemark.edges.map(({ node }, i) => (
							<Column key={i} xs="12">
								<Accordion title={node.frontmatter.question}>
									<S.Text dangerouslySetInnerHTML={{__html: node.html}}>
									</S.Text>
								</Accordion>
							</Column>
						))}
					</Row>
				</S.QuestionColumn>
			</Row>
		</SectionStatic>
	)
}
