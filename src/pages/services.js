import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { ServicesDescription } from '../components/servicesDescription'
import { CallToAction } from '../components/callToAction'
import { FrequentlyAskedQuestions } from '../components/frequentlyAskedQuestions'

const servicesPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Services | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<ServicesDescription />
		<CallToAction />
		<FrequentlyAskedQuestions />
	</Layout>
)

export default servicesPage

export const query = graphql`
  query servicesPageQuery {
		heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
