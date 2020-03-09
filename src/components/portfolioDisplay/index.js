import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import { Button } from '../button'

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
						<StyledBackground fluid={node.image.childImageSharp.fluid} alt={node.company}/>
					</StyledWrapperLink>
					<StyledTextContainer>
						<StyledService>
							{node.services}
						</StyledService>
						<StyledCompany>
							{node.company}
						</StyledCompany>
						<StyledDescription>
							{node.industry}
						</StyledDescription>
						<Button href={node.link} target="_blank" rel="noreferrer">Go To Site</Button>
					</StyledTextContainer>
				</Column>
			))}
		</Row>
	</SectionStatic>
)
