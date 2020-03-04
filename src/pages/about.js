import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { OurPrinciples } from '../components/ourPrinciples'
import { MeetManagement } from '../components/meetManagement'
import { Testimonials } from '../components/testimonials'
import { OurTechnologies } from '../components/ourTechnologies'

const aboutPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>About | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="About Us"
			text="We made a list of our priorities and our clients are at the top of it."
			darken="0.5"
			position="bottom"
		/>
		<OurPrinciples />
		<Testimonials />
		<MeetManagement />
		<OurTechnologies />
	</Layout>
)

export default aboutPage

export const query = graphql`
  query aboutQuery {
		heroImage:file(relativePath: { eq: "skyscrapers.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
