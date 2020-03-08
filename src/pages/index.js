import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HomeHero } from '../components/homeHero'
import { HomeIntro } from '../components/homeIntro'
import { Testimonials } from '../components/testimonials'
import { ServicesDescription } from '../components/servicesDescription'
import { FrequentlyAskedQuestions } from '../components/frequentlyAskedQuestions'
import { CallToAction } from '../components/callToAction'
import { Technologies } from '../components/technologies'

const IndexPage = ({ data }) => (
	<Layout transparentNav>
		<Helmet>
			<title>Caution Creation | Edmonton Web Development</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
		</Helmet>
		<HomeHero src={data.heroImage.childImageSharp.fluid}/>
		<HomeIntro />
		<Testimonials />
		<ServicesDescription />
		<Technologies />
		<FrequentlyAskedQuestions />
		<CallToAction />
	</Layout>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, toFormat: "WEBP") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
