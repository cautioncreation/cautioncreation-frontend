import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row, Column } from '../../components/grid'
import { Slider } from '../../components/slider'

import * as S from './style'

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
		<SectionStatic background={theme.colors.lightGrey}>
			<S.Title>A Few of Our Favourite Technologies</S.Title>
			<Row>
				<Column xs="0" lg="1" spacer />
				<S.Column xs="12" lg="10">
					<Slider interval="2" prefix="technologies" show="5" hideIcons>
						<S.VectorContainer>
							<S.Vector src={data.sass.publicURL} alt="Sass logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.nodejs.publicURL} alt="Node.js logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.mysql.publicURL} alt="mySQL logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.react.publicURL} alt="React.js logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.php.publicURL} alt="PHP logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.gatsby.publicURL} alt="Gatsby.js logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.netlify.publicURL} alt="Netlify logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.strapi.publicURL} alt="Strapi logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.heroku.publicURL} alt="Heroku logo" />
						</S.VectorContainer>
						<S.VectorContainer>
							<S.Vector src={data.bootstrap.publicURL} alt="Bootstrap logo" />
						</S.VectorContainer>
					</Slider>
				</S.Column>
				<Column xs="0" lg="1" spacer />
			</Row>
		</SectionStatic>
	)
})
