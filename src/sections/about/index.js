import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'
import {
	StyledTitle,
	StyledText,
} from './style'

export const About = () => (
	<SectionStatic>
		<Row>
			<Column xs="12" lg="6">
				<StyledTitle>We're a small company, and we're <span>proud</span> of it.</StyledTitle>
				<StyledText>
					Many web development agencies pride themselves in the fact that they're large and established. At Caution Creation, we like to think outside the box and go against the grain. We're small, we're new, and those are advantages. But what does that mean for you? It means we are able to adapt our approach to the needs of our customers, and develop websites that truly represent your brand identity.
				</StyledText>
			</Column>
			<Column xs="12" lg="6">
				<StyledText>
					Caution Creation started in a basement in a small town in northern Alberta. Since then, we've focused on making relationships, developing websites, and improving our service. As we grow, we stick to our roots. You can expect a personalized experience, continuing service and a high quality end product when you choose us for your web development needs.
					<br />
					<br />
					<a href="/contact">Contact us today</a> and experience the difference that a web development agency devoted to you and your business will make!
				</StyledText>
			</Column>
		</Row>
	</SectionStatic>
)
