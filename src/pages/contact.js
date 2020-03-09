import React from "react"
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
			text="No matter the reason for your inquiry, let's set up a time for coffee and sort it out."
			darken="0.4"
			position="bottom"
		/>
		<ContactForm />
	</Layout>
)

export default contactPage

export const query = graphql`
  query contactPageQuery {
		heroImage:file(relativePath: { eq: "conference-call.jpeg" }) {
      childImageSharp {
        fluid(quality: 95, toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
