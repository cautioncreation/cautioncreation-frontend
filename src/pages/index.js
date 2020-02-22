import React from "react"
import { graphql } from "gatsby"

import Layout from '../layouts/Layout'
import { HomeHero } from '../components/homeHero'
import { HomeIntro } from '../components/homeIntro'
import { HomeTestimonials } from '../components/homeTestimonials'

const IndexPage = ({ data }) => (
	<Layout>
		<HomeHero src={data.heroImage.childImageSharp.fluid}/>
		<HomeIntro />
		<HomeTestimonials data={data.allStrapiTestimonial.edges}/>
	</Layout>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
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
