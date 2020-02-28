import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { Testimonials } from '../components/testimonials'
import { Portfolio } from '../components/portfolio'
import { PortfolioHero } from '../components/portfolioHero'
import { Header } from '../components/header'

const portfolioPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<PortfolioHero />
		<Portfolio
			data={data.allStrapiPortfolio.edges}
		/>
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
