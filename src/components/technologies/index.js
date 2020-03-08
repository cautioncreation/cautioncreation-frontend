import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { ContainerStatic, Row, Column } from '../grid'
import { Slider } from '../slider'

import {
	StyledColumn,
	StyledTitle,
	StyledVectorContainer,
	StyledVector,
} from './style'

export const Technologies = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
    query technologiesQuery {
			sass:file(relativePath: { eq: "svg/sass.svg" }) {
	      publicURL
	    }
			nodejs:file(relativePath: { eq: "svg/nodejs.svg" }) {
	      publicURL
	    }
			mysql:file(relativePath: { eq: "svg/mysql.svg" }) {
	      publicURL
	    }
			react:file(relativePath: { eq: "svg/react.svg" }) {
	      publicURL
	    }
			php:file(relativePath: { eq: "svg/php.svg" }) {
	      publicURL
	    }
			gatsby:file(relativePath: { eq: "svg/gatsby.svg" }) {
	      publicURL
	    }
			heroku:file(relativePath: { eq: "svg/heroku.svg" }) {
	      publicURL
	    }
			strapi:file(relativePath: { eq: "svg/strapi.svg" }) {
	      publicURL
	    }
			netlify:file(relativePath: { eq: "svg/netlify.svg" }) {
	      publicURL
	    }
			bootstrap:file(relativePath: { eq: "svg/bootstrap.svg" }) {
	      publicURL
	    }
    }
  `)

	return (
		<ContainerStatic background={theme.colors.lightGrey}>
			<StyledTitle>A Few of Our Favourite Technologies</StyledTitle>
			<Row>
				<Column xs="0" lg="1" spacer />
				<StyledColumn xs="12" lg="10">
					<Slider interval="2" prefix="technologies" show="5" hideIcons>
						<StyledVectorContainer>
							<StyledVector fluid={data.sass.publicURL} alt="Sass logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.nodejs.publicURL} alt="Node.js logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.mysql.publicURL} alt="mySQL logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.react.publicURL} alt="React.js logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.php.publicURL} alt="PHP logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.gatsby.publicURL} alt="Gatsby.js logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.netlify.publicURL} alt="Netlify logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.strapi.publicURL} alt="Strapi logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.heroku.publicURL} alt="Heroku logo" />
						</StyledVectorContainer>
						<StyledVectorContainer>
							<StyledVector fluid={data.bootstrap.publicURL} alt="Bootstrap logo" />
						</StyledVectorContainer>
					</Slider>
				</StyledColumn>
				<Column xs="0" lg="1" spacer />
			</Row>
		</ContainerStatic>
	)
})
