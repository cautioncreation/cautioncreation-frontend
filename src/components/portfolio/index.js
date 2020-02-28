import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import { Button } from '../button'

import {
		StyledWrapperLink,
		StyledBackground,
		StyledTextContainer,
		StyledService,
		StyledCompany,
		StyledDescription,
} from './style'

export const Portfolio = ({ data }) => (
	<SectionStatic>
		<Row>
			{data.map(({ node }, i) => (
				<Column xs="12" lg="6">
					<StyledWrapperLink>
						<StyledBackground fluid={node.image.childImageSharp.fluid} />
					</StyledWrapperLink>
					<StyledTextContainer>
						<StyledService>
							Development
						</StyledService>
						<StyledCompany>
							{node.company}
						</StyledCompany>
						<StyledDescription>
							{node.description}
						</StyledDescription>
						<Button href={node.link} target="_blank">Go To Site</Button>
					</StyledTextContainer>
				</Column>
			))}
		</Row>
	</SectionStatic>
)
