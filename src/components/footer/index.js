import React from 'react'
import { withTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { ContainerStatic, Row, Column } from '../grid'
import { FooterItem } from '../footerItem'
import { SocialIcons } from '../socialIcons'
import { MailchimpForm } from '../mailchimpForm'
import * as S from './style'

export const Footer = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
		query footerQuery {
			logo:file(relativePath: { eq: "svg/logo.svg" }) {
	      publicURL
	    }
		}
	`)

	return (
		<S.Footer>
			<ContainerStatic background={theme.colors.black}>
				<Row>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="navigate">
							<S.FooterLink href="/">Home</S.FooterLink>
							<S.FooterLink href="/about">About</S.FooterLink>
							<S.FooterLink href="/services">Services</S.FooterLink>
							<S.FooterLink href="/portfolio">Portfolio</S.FooterLink>
						</FooterItem>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Services">
							<S.FooterLink href="/development">Development</S.FooterLink>
							<S.FooterLink href="/maintenance">Maintenance</S.FooterLink>
							<S.FooterLink href="/branding-and-design">Branding & Design</S.FooterLink>
						</FooterItem>
					</Column>
					<Column xs="0" lg="2">
						<S.LogoLink>
							<S.Logo src={data.logo.publicURL} alt="Caution Creation logo" />
						</S.LogoLink>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Support">
							<S.FooterLink href="/sitemap.xml">Sitemap</S.FooterLink>
							<S.FooterLink href="/privacy-policy">Privacy Policy</S.FooterLink>
							<S.FooterLink href="/cookie-policy">Cookie Policy</S.FooterLink>
						</FooterItem>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Contact">
							<S.FooterLink href="tel: 780-618-6340">+1 (780) 618 6340</S.FooterLink>
							<S.FooterLink href="mailto: hi@cautioncreation.com">hi@cautioncreation.com</S.FooterLink>
							<S.FooterLink href="https://www.google.com/maps/place/13035+200+St+NW,+Edmonton,+AB+T5S+0E1/@53.5916904,-113.6666143,17z/data=!3m1!4b1!4m5!3m4!1s0x53a0271e4125eb8b:0x248ede7059613225!8m2!3d53.5916904!4d-113.6644256">
								13035 200 St NW,
								<br />
								Edmonton AB, T5S 0E1
						</S.FooterLink>
						</FooterItem>
					</Column>
				</Row>
				<Row>
					<Column xs="0" lg="2" spacer />
					<Column xs="12" lg="4">
						<MailchimpForm />
					</Column>
					<Column xs="12" lg="4">
						<S.SocialTitle>Follow us on social</S.SocialTitle>
						<S.SocialContainer>
							<SocialIcons />
						</S.SocialContainer>
					</Column>
					<Column xs="0" lg="2" spacer />
				</Row>
			</ContainerStatic>
		</S.Footer>
	)
})
