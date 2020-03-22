import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { MainLayout } from '../layouts/main'
import { HeroSmall } from '../sections/hero'
import { Testimonials } from '../sections/testimonials'
import { CallToAction } from '../sections/callToAction'
import { PortfolioDisplay } from '../sections/portfolioDisplay'
import { FrequentlyAskedQuestions } from '../sections/frequentlyAskedQuestions'

const portfolioPage = ({ data }) => (
	<MainLayout>
		<Helmet>
			<title>Portfolio | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="Our Portfolio"
			text="No matter the size or complexity, we'll develop a product your users will love."
			darken="0.4"
			position="top"
		/>
		<PortfolioDisplay
			data={data.allStrapiPortfolio.edges}
		/>
		<Testimonials />
		<FrequentlyAskedQuestions />
		<CallToAction />
	</MainLayout>
)

export default portfolioPage

export const query = graphql`
  query portfolioPageQuery {
		heroImage:file(relativePath: { eq: "hands-typing.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		allStrapiPortfolio {
	    edges {
	      node {
	        id
	        image {
						childImageSharp {
			        fluid(quality: 95) {
			          ...GatsbyImageSharpFluid
			        }
			      }
	        }
	        company
	        industry
					services
					link
	      }
	    }
	  }
  }
`;
