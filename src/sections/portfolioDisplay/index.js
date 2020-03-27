import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'
import { Button } from '../../components/button'

import * as S from './style'

export const PortfolioDisplay = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="0" lg="2" spacer />
			<Column xs="12" lg="8">
				<S.Title>Some of Our Best Works</S.Title>
			</Column>
			<Column xs="0" lg="2" spacer />
		</Row>
		<Row>
			{data.map(({ node }, i) => (
				<Column xs="12" lg="6">
					<S.WrapperLink>
						<S.Background fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.company}/>
					</S.WrapperLink>
					<S.TextContainer>
						<S.Service>
							{node.frontmatter.services}
						</S.Service>
						<S.Company>
							{node.frontmatter.company}
						</S.Company>
						<S.Description>
							{node.frontmatter.industry}
						</S.Description>
						<Button href={node.frontmatter.link} target="_blank" rel="noreferrer">Go To Site</Button>
					</S.TextContainer>
				</Column>
			))}
		</Row>
	</SectionStatic>
)
