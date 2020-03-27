import React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { MainLayout } from '../layouts/main'
import { HeroSmall } from '../sections/hero'
import { ContactForm } from '../sections/contactForm'

const contactPage = ({ data }) => (
	<MainLayout>
		<Helmet>
			<title>Contact | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="Contact Us"
			text="Whatever the reason for your inquiry, let's set up a time for coffee and sort it out."
			darken="0.4"
			position="middle"
		/>
		<ContactForm />
	</MainLayout>
)

export default contactPage

export const query = graphql`
  query contactPageQuery {
		heroImage:file(relativePath: { eq: "conference-call.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
