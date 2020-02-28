import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { Testimonials } from '../components/testimonials'

const servicesPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			text="Our Services"
			light
		/>
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
