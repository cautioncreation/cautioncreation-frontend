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
		<HomeTestimonials />
	</Layout>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    heroImage:file(relativePath: { eq: "man-stars-night.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		ownerImage:file(relativePath: { eq: "open-shop.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
		coderImage:file(relativePath: { eq: "desk-laptop.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
