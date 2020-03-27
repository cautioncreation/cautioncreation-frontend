import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { MainLayout } from '../layouts/main'
import { HeroSmall } from '../sections/hero'
import { OurPrinciples } from '../sections/ourPrinciples'
import { Management } from '../sections/management'
import { Testimonials } from '../sections/testimonials'
import { Technologies } from '../sections/technologies'
import { About } from '../sections/about'

const aboutPage = ({ data }) => (
	<MainLayout>
		<Helmet>
			<title>About | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="About Us"
			text="We made a list of our priorities and our clients are at the top."
			darken="0.5"
			position="bottom"
		/>
		<About />
		<Technologies />
		<OurPrinciples />
		<Testimonials />
		<Management />
	</MainLayout>
)

export default aboutPage

export const query = graphql`
  query aboutPageQuery {
		heroImage:file(relativePath: { eq: "skyscrapers.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
