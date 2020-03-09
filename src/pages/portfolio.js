import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { CallToAction } from '../components/callToAction'
import { PortfolioDisplay } from '../components/portfolioDisplay'
import { FrequentlyAskedQuestions } from '../components/frequentlyAskedQuestions'
import { Testimonials } from '../components/testimonials'

const portfolioPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Portfolio | Caution Creation</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<HeroSmall
			src={data.heroImage.childImageSharp.fluid}
			title="Our Portfolio"
			text="No matter the size or complexity, we will develop a product your users will love."
			darken="0.25"
			position="top"
		/>
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
