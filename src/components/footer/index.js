import React from 'react'
import { withTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { ContainerStatic, Row, Column } from '../grid'
import { FooterItem } from '../footerItem'
import { SocialIcons } from '../socialIcons'
import {
	StyledFooter,
	StyledFooterLink,
	StyledLogoLink,
	StyledLogo,
	StyledFormTitle,
	StyledForm,
	StyledInputWrapper,
	StyledInput,
	StyledSubmit,
	StyledSocialContainer,
	StyledSocialTitle,
} from './style'

export const Footer = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
		query footerQuery {
			logo:file(relativePath: { eq: "svg/logo.svg" }) {
	      publicURL
	    }
		}
	`)

	return (
		<StyledFooter>
			<ContainerStatic background={theme.colors.black}>
				<Row>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="navigate">
							<StyledFooterLink href="/">Home</StyledFooterLink>
							<StyledFooterLink href="/about">About</StyledFooterLink>
							<StyledFooterLink href="/services">Services</StyledFooterLink>
							<StyledFooterLink href="/portfolio">Portfolio</StyledFooterLink>
						</FooterItem>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Services">
							<StyledFooterLink href="/development">Development</StyledFooterLink>
							<StyledFooterLink href="/maintenance">Maintenance</StyledFooterLink>
							<StyledFooterLink href="/branding-and-design">Branding & Design</StyledFooterLink>
						</FooterItem>
					</Column>
					<Column xs="0" lg="2">
						<StyledLogoLink>
							<StyledLogo src={data.logo.publicURL} alt="Caution Creation logo" />
						</StyledLogoLink>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Support">
							<StyledFooterLink href="/sitemap.xml">Sitemap</StyledFooterLink>
							<StyledFooterLink href="/privacy-policy">Privacy Policy</StyledFooterLink>
							<StyledFooterLink href="/cookie-policy">Cookie Policy</StyledFooterLink>
						</FooterItem>
					</Column>
					<Column xs="12" md="6" lg="2.5">
						<FooterItem title="Contact">
							<StyledFooterLink href="tel: 780-618-6340">+1 (780) 618 6340</StyledFooterLink>
							<StyledFooterLink href="mailto: hi@cautioncreation.com">hi@cautioncreation.com</StyledFooterLink>
							<StyledFooterLink href="https://www.google.com/maps/place/13035+200+St+NW,+Edmonton,+AB+T5S+0E1/@53.5916904,-113.6666143,17z/data=!3m1!4b1!4m5!3m4!1s0x53a0271e4125eb8b:0x248ede7059613225!8m2!3d53.5916904!4d-113.6644256">
								13035 200 St NW,
								<br />
								Edmonton AB, T5S 0E1
						</StyledFooterLink>
						</FooterItem>
					</Column>
				</Row>
				<Row>
					<Column xs="0" lg="2" spacer />
					<Column xs="12" lg="4">
						<StyledForm>
							<StyledFormTitle htmlFor="footerEmail">Join our Weekly Newsletter</StyledFormTitle>
							<StyledInputWrapper>
								<StyledInput placeholder="Your Email" id="footerEmail" name="email" />
								<StyledSubmit>Join</StyledSubmit>
							</StyledInputWrapper>
						</StyledForm>
					</Column>
					<Column xs="12" lg="4">
						<StyledSocialTitle>Follow us on social</StyledSocialTitle>
						<StyledSocialContainer>
							<SocialIcons />
						</StyledSocialContainer>
					</Column>
					<Column xs="0" lg="2" spacer />
				</Row>
			</ContainerStatic>
		</StyledFooter>
	)
})
