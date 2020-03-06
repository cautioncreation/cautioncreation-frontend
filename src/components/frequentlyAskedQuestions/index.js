import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Container, Row, Column } from '../grid'

import { Accordion } from '../accordion'

import {
	StyledQuestionColumn,
	StyledTitle,
	StyledLine,
	StyledText,
} from './style'

export const FrequentlyAskedQuestions = () => {
	const data = useStaticQuery(graphql`
    query frequentlyAskedQuestionsQuery {
			allStrapiQuestion {
		    edges {
		      node {
						id
		        title
		        answer
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
					<Container>
						<Row>
							{data.allStrapiQuestion.edges.map(({ node }, i) => (
								<Column key={i} xs="12">
									<Accordion title={node.title}>
										<StyledText dangerouslySetInnerHTML={{__html: node.answer}}>
										</StyledText>
									</Accordion>
								</Column>
							))}
						</Row>
					</Container>
				</StyledQuestionColumn>
			</Row>
		</SectionStatic>
	)
}