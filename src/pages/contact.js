import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { ContactForm } from '../components/contactForm'

const contactPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
			<HeroSmall
				src={data.heroImage.childImageSharp.fluid}
				title="Contact Us"
				text="No matter your question, we're here to help!"
				light
			/>
		<ContactForm />
	</Layout>
)

export default contactPage

export const query = graphql`
  query contactQuery {
		heroImage:file(relativePath: { eq: "edmonton.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
