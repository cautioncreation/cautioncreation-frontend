import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'
import { Header } from '../components/header'
import { Testimonials } from '../components/testimonials'

const aboutPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
		<Header title="About Us" />
		<Testimonials data={data.allStrapiTestimonial.edges}/>
	</Layout>
)

export default aboutPage

export const query = graphql`
  query aboutQuery {
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
