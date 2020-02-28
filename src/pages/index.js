import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { HomeHero } from '../components/homeHero'
import { HomeIntro } from '../components/homeIntro'
import { Testimonials } from '../components/testimonials'
import { ServicesDescription } from '../components/servicesDescription'
import { HomeWhy } from '../components/homeWhy'
import { HomeQuestions } from '../components/homeQuestions'

const IndexPage = ({ data }) => (
	<Layout transparentNav>
		<Helmet>
			<title>Caution Creation | Edmonton Web Development</title>
			<meta name="description" content="Caution Creation is a web development agency that specializes in streamlined web applications for small businesses & startups. We offer development, branding & design, as well as maintenance services."></meta>
		</Helmet>
		<HomeHero src={data.heroImage.childImageSharp.fluid}/>
		<HomeIntro />
		<Testimonials data={data.allStrapiTestimonial.edges}/>
		<ServicesDescription />
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
