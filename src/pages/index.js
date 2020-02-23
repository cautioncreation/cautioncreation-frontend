import React from "react"
import { graphql } from "gatsby"

import Layout from '../layouts/Layout'
import { HomeHero } from '../components/homeHero'
import { HomeIntro } from '../components/homeIntro'
import { HomeTestimonials } from '../components/homeTestimonials'
import { HomeServices } from '../components/homeServices'
import { HomeWhy } from '../components/homeWhy'
import { HomeQuestions } from '../components/homeQuestions'

const IndexPage = ({ data }) => (
	<Layout>
		<HomeHero src={data.heroImage.childImageSharp.fluid}/>
		<HomeIntro />
		<HomeTestimonials data={data.allStrapiTestimonial.edges}/>
		<HomeServices
			src={[
				data.developmentImage.childImageSharp.fluid,
				data.brandingImage.childImageSharp.fluid,
				data.maintenanceImage.childImageSharp.fluid
			]}
		/>
		<HomeWhy />
		<HomeQuestions data={data.allStrapiQuestion.edges}/>
	</Layout>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    heroImage:file(relativePath: { eq: "chair-and-wall.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		developmentImage:file(relativePath: { eq: "development-illustration.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		brandingImage:file(relativePath: { eq: "branding-illustration.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		maintenanceImage:file(relativePath: { eq: "maintenance-illustration.png" }) {
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
		allStrapiQuestion {
	    edges {
	      node {
					id
	        title
	        answer
    		}
  		}
		}
  }
`;
