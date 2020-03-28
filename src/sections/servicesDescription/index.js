import React from 'react'

import { SectionStatic, Column } from '../../components/grid'
import { Button } from '../../components/button'

import Programming from '../../images/svg/undraw_programming.svg'
import MobileWireframe from '../../images/svg/undraw_mobile_wireframe.svg'
import Dashboard from '../../images/svg/undraw_dashboard.svg'

import * as S from './style'

export const ServicesDescription = ({ src }) => (
	<SectionStatic>
		<S.Row>
			<Column xs="0" lg="1"/>
			<S.Column xs="12" lg="6">
				<S.Header>Development</S.Header>
				<S.Paragraph>
					Our experienced development team has the experience to ensure that your website or application has the speed, simplicity and style to increase web traffic, conversions and every other metric important to your businesses success. We understand not only your businesses needs, but the needs of your customers as well, and it shows in our development practices.
				</S.Paragraph>
				<Button href="/development">Development</Button>
			</S.Column>
			<Column xs="12" lg="4">
				<S.VectorWrapper>
					<S.Vector src={Programming} alt="Illustration of man looking at multiple screens" />
				</S.VectorWrapper>
			</Column>
			<Column xs="0" lg="1"/>
		</S.Row>
		<S.Row>
			<Column xs="0" lg="1"/>
			<Column xs="12" lg="4">
				<S.VectorWrapper>
					<S.Vector src={MobileWireframe} alt="Illustration of two people working" />
				</S.VectorWrapper>
			</Column>
			<S.ColumnRight xs="12" lg="6">
				<S.HeaderRight>Branding & Design</S.HeaderRight>
				<S.ParagraphRight>
					In today's digital world, brand identity matters. We work hard to ensure that when new visitors view your site they not only have a smooth experience, but they remember your brand identity as well. We do this by ensuring not only that the colours, fonts and logos match your brand, but that the imagery and content speak to your comapanies vision as well.
				</S.ParagraphRight>
				<Button href="/branding-and-design">Branding & Design</Button>
			</S.ColumnRight>
			<Column xs="0" lg="1"/>
		</S.Row>
		<S.Row>
			<Column xs="0" lg="1"/>
			<S.Column xs="12" lg="6">
				<S.Header>Maintenance</S.Header>
				<S.Paragraph>
					Keeping your websites content and security updated can be a huge undertaking. In a lot of cases it can impede on your ability to run your business, especially if you aren't particularly web literate. Thankfully, Caution Creation is here to step in and take over. Content, security, backups, updates, SEO and more. No matter the size or complexity, we've got your businesses online needs covered.
				</S.Paragraph>
				<Button href="/maintenance">Maintenance</Button>
			</S.Column>
			<Column xs="12" lg="4">
				<S.VectorWrapper>
					<S.Vector src={Dashboard}  alt="Illustration of a man in front of a computer screen" />
				</S.VectorWrapper>
			</Column>
			<Column xs="0" lg="1"/>
		</S.Row>
	</SectionStatic>
)
