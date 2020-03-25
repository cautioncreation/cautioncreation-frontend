import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'
import { Button } from '../../components/button'

import {
		StyledTitle,
		StyledWrapperLink,
		StyledBackground,
		StyledTextContainer,
		StyledService,
		StyledCompany,
		StyledDescription,
} from './style'

export const PortfolioDisplay = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="0" lg="2" spacer />
			<Column xs="12" lg="8">
				<StyledTitle>Some of Our Best Works</StyledTitle>
			</Column>
			<Column xs="0" lg="2" spacer />
		</Row>
		<Row>
			{data.map(({ node }, i) => (
				<Column xs="12" lg="6">
					<StyledWrapperLink>
						<StyledBackground fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.company}/>
					</StyledWrapperLink>
					<StyledTextContainer>
						<StyledService>
							{node.frontmatter.services}
						</StyledService>
						<StyledCompany>
							{node.frontmatter.company}
						</StyledCompany>
						<StyledDescription>
							{node.frontmatter.industry}
						</StyledDescription>
						<Button href={node.frontmatter.link} target="_blank" rel="noreferrer">Go To Site</Button>
					</StyledTextContainer>
				</Column>
			))}
		</Row>
	</SectionStatic>
)
