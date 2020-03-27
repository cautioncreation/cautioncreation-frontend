import React from 'react'
import { withTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Section } from '../../components/grid'
import { Button } from '../../components/button'

import * as S from './style'

export const BetterWebsites = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
		query betterWebsites {
			speed:file(relativePath: { eq: "svg/speed.svg" }) {
	      publicURL
	    }
			browser:file(relativePath: { eq: "svg/browser.svg" }) {
	      publicURL
	    }
			security:file(relativePath: { eq: "svg/security.svg" }) {
	      publicURL
	    }
			server:file(relativePath: { eq: "svg/server.svg" }) {
	      publicURL
	    }
		}
	`)
	return (
		<Section background={theme.colors.lightGrey}>
			<S.Header>Our Websites Are Simply Better</S.Header>
			<S.Row>
				<S.Column xs="12" md="6" lg="3">
					<S.Image src={data.speed.publicURL} alt="speed indicator icon"/>
					<S.Title>Speed</S.Title>
					<S.Text>
						By utilizing content delivery networks, optimized code and the best servers our websites become faster and keep visitors on your site for longer, increasing conversions.
					</S.Text>
				</S.Column>
				<S.Column xs="12" md="6" lg="3">
					<S.Image src={data.browser.publicURL} alt="broswer icon"/>
					<S.Title>Simplicity</S.Title>
					<S.Text>
						Unlike traditional content management systems, we build websites in a way that separates the content from the code which simplifies the admin experience.
					</S.Text>
				</S.Column>
				<S.Column xs="12" md="6" lg="3">
					<S.Image src={data.security.publicURL} alt="computer security icon"/>
					<S.Title>Security</S.Title>
					<S.Text>
						Because our websites don't rely on dynamic servers or databases they are inherently less susceptible to any forms of hacking, no matter the goal of the attack.
					</S.Text>
				</S.Column>
				<S.Column xs="12" md="6" lg="3">
					<S.Image src={data.server.publicURL} alt="server icon"/>
					<S.Title>Scale</S.Title>
					<S.Text>
						With traditional websites, if you have a spike in traffic you risk a website crash. Because our websites are static, they scale effortlessly and without interruption.
					</S.Text>
				</S.Column>
			</S.Row>
			<S.Row>
				<S.Column xs="12">
					<Button href="/contact">Inquire Today</Button>
				</S.Column>
			</S.Row>
		</Section>
	)
})
