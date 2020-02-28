import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HeroSmall } from '../components/hero'
import { Testimonials } from '../components/testimonials'

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
			light
		/>
		<Testimonials data={data.allStrapiTestimonial.edges}/>
	</Layout>
)

export default aboutPage

export const query = graphql`
  query aboutQuery {
		heroImage:file(relativePath: { eq: "meeting-board.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
	  allStrapiTestimonial {
	    edges {
	      node {
					id
	        name
	        testimonial
	        position
	        company
    		}
  		}
		}
  }
`;
