import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { ServicesHero } from '../components/servicesHero'
import { ServicesDescription } from '../components/servicesDescription'

const servicesPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<ServicesHero />
		<ServicesDescription />
	</Layout>
)

export default servicesPage

export const query = graphql`
  query servicesQuery {
		heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
