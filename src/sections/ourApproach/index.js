import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionStatic, Row, Column } from '../../components/grid'
import * as S from './style'

export const OurApproach = () => {
	const data = useStaticQuery(graphql`
    query ourApproachQuery {
			mockupImage:file(relativePath: { eq: "wilderness-apparel-mockup.png" }) {
	      childImageSharp {
	        fluid(quality: 95) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
    }
  `)

	return (
		<SectionStatic>
			<Row>
				<Column xs="12" lg="6">
					<Image fluid={data.mockupImage.childImageSharp.fluid} />
				</Column>
				<Column xs="12" lg="6">
					<S.Title>We take a <span>different</span> approach to web development.</S.Title>
					<S.Text>
						Too many web development companies these days are only concerned with developing your website, and then sending you on your way. Caution Creation thinks differently. We believe that our job is not only to produce a website that you and your users love, but also to aid in the maintenance of that website as long as it's on the web.
					</S.Text>
				</Column>
			</Row>
		</SectionStatic>
	)
}
