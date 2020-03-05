import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { Header } from '../components/header'
import { DevelopmentServices } from '../components/developmentServices'

const developmentPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="Development"
			text="No matter the size or complexity, we will develop a product your users will love."
			darken="0.25"
			position="top"
		/>
		<DevelopmentServices />

	</Layout>
)

export default developmentPage

export const query = graphql`
  query developmentQuery {
		heroImage:file(relativePath: { eq: "hands-typing.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
