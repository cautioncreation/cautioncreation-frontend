import React from 'react'

import { Row } from '../grid'

import Lightning from '../../images/svg/lightning.svg'
import Chart from '../../images/svg/chart.svg'
import Browser from '../../images/svg/browser.svg'

import {
	StyledSection,
	StyledContainerStatic,
	StyledColumn,
	StyledSVG,
	StyledTitle,
	StyledText,
} from './style'

export const HomeWhy = () => (
	<StyledSection>
		<StyledContainerStatic>
			<Row>
				<StyledColumn xs="12" lg="4">
					<StyledSVG src={Browser} />
					<StyledTitle>Simple in Every Way</StyledTitle>
					<StyledText>
						You and your users will love how easy it is to use and make changes to your website.
					</StyledText>
				</StyledColumn>
				<StyledColumn xs="12" lg="4">
					<StyledSVG src={Lightning} />
					<StyledTitle>Lightning Fast</StyledTitle>
					<StyledText>
						Our websites are specifically optimized to be fast, so you can keep your bounce rate low!
					</StyledText>
				</StyledColumn>
				<StyledColumn xs="12" lg="4">
					<StyledSVG src={Chart} />
					<StyledTitle>SEO Friendly</StyledTitle>
					<StyledText>
						Our websites are designed from the start with SEO in mind, which makes maintenance easy.
					</StyledText>
				</StyledColumn>
			</Row>
		</StyledContainerStatic>
	</StyledSection>
)
