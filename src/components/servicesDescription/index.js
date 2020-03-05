import React from 'react'

import { SectionStatic, Column } from '../grid'
import { Button } from '../button'

import WorkInProgress from '../../images/svg/undraw_work_in_progress.svg'
import MobileWireframe from '../../images/svg/undraw_mobile_wireframe.svg'
import CleanUp from '../../images/svg/undraw_clean_up.svg'

import {
	StyledRow,
	StyledColumn,
	StyledColumnRight,
	StyledVector,
	StyledVectorWrapper,
	StyledHeader,
	StyledHeaderRight,
	StyledParagraph,
	StyledParagraphRight,
} from './style'

export const ServicesDescription = ({ src }) => (
	<SectionStatic>
		<StyledRow>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Development</StyledHeader>
				<StyledParagraph>
					Our experienced development team has the experience to ensure that your website or application has the speed, simplicity and style to increase web traffic, conversions and every other metric important to your businesses success. We understand not only your businesses needs, but the needs of your customers as well, and it shows in our development practices.
				</StyledParagraph>
				<Button href="/development">Learn More</Button>
			</StyledColumn>
			<Column xs="12" lg="4">
				<StyledVectorWrapper>
					<StyledVector src={WorkInProgress} />
				</StyledVectorWrapper>
			</Column>
			<Column xs="0" lg="1"/>
		</StyledRow>
		<StyledRow>
			<Column xs="0" lg="1"/>
			<Column xs="12" lg="4">
				<StyledVectorWrapper>
					<StyledVector src={MobileWireframe} />
				</StyledVectorWrapper>
			</Column>
			<StyledColumnRight xs="12" lg="6">
				<StyledHeaderRight>Branding & Design</StyledHeaderRight>
				<StyledParagraphRight>
					In today's digital world, brand identity matters. We work hard to ensure that when new visitors view your site they not only have a smooth experience, but they remember your brand identity as well. We do this by ensuring not only that the colours, fonts and logos match your brand, but that the imagery and content speak to your comapanies vision as well.
				</StyledParagraphRight>
				<Button href="/branding-and-design">Learn More</Button>
			</StyledColumnRight>
			<Column xs="0" lg="1"/>
		</StyledRow>
		<StyledRow>
			<Column xs="0" lg="1"/>
			<StyledColumn xs="12" lg="6">
				<StyledHeader>Maintenance</StyledHeader>
				<StyledParagraph>
					Keeping your websites content and security updated can be a huge undertaking. In a lot of cases it can impede on your ability to run your business, especially if you aren't particularily web literate. Thankfully, Caution Creation is here to step in and take over. Content, security, backups, updates, SEO and more. No matter the size or complexity, we've got your digital needs covered.
				</StyledParagraph>
				<Button href="/maintenance">Learn More</Button>
			</StyledColumn>
			<Column xs="12" lg="4">
				<StyledVectorWrapper>
					<StyledVector src={CleanUp} />
				</StyledVectorWrapper>
			</Column>
			<Column xs="0" lg="1"/>
		</StyledRow>
	</SectionStatic>
)
