import React from 'react'
import { withTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { ContainerStatic, Row, Column } from '../grid'

import {
	StyledLogo,
	StyledLogoColumn,
	StyledTitleWrapper,
	StyledTitle,
	StyledSubtitle,
} from './style'

export const BlogHeader = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
		query blogHeaderQuery {
			logo:file(relativePath: { eq: "svg/logo.svg" }) {
	      publicURL
	    }
		}
	`)

	return (
		<ContainerStatic background={theme.colors.darkBlue}>
			<Row>
				<StyledLogoColumn xs="12">
					<StyledLogo src={data.logo.publicURL} />
					<StyledTitleWrapper>
						<StyledTitle>
							Caution Creation Blog
						</StyledTitle>
						<StyledSubtitle>
							Articles for developers, freelancers, and business owners
						</StyledSubtitle>
					</StyledTitleWrapper>

				</StyledLogoColumn>
			</Row>
		</ContainerStatic>
	)
})
