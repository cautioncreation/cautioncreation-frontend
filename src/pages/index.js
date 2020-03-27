import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { MainLayout } from '../layouts/main'
import { HomeHero } from '../sections/homeHero'
import { HomeIntro } from '../sections/homeIntro'
import { Testimonials } from '../sections/testimonials'
import { ServicesDescription } from '../sections/servicesDescription'
import { FrequentlyAskedQuestions } from '../sections/frequentlyAskedQuestions'
import { CallToAction } from '../sections/callToAction'
import { BetterWebsites } from '../sections/betterWebsites'

const IndexPage = ({ data }) => (
	<MainLayout transparentNav>
		<Helmet>
			<title>Caution Creation | Edmonton Web Development</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
		</Helmet>
		<HomeHero src={data.heroImage.childImageSharp.fluid}/>
		<HomeIntro />
		<Testimonials />
		<ServicesDescription />
		<BetterWebsites />
		<FrequentlyAskedQuestions />
		<CallToAction />
	</MainLayout>
)

export default IndexPage

export const query = graphql`
  query indexPageQuery {
    heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
