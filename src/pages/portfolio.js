import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from '../layouts'
import { CallToAction } from '../components/callToAction'
import { PortfolioDisplay } from '../components/portfolioDisplay'
import { PortfolioHero } from '../components/portfolioHero'
import { FrequentlyAskedQuestions } from '../components/frequentlyAskedQuestions'
import { Testimonials } from '../components/testimonials'

const portfolioPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<PortfolioHero />
		<PortfolioDisplay
			data={data.allStrapiPortfolio.edges}
		/>
		<Testimonials />
		<FrequentlyAskedQuestions />
		<CallToAction />
	</Layout>
)

export default portfolioPage

export const query = graphql`
  query portfolioQuery {
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
	        description
					link
	      }
	    }
	  }
  }
`;
