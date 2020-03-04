import React from 'react'
import { withTheme } from 'styled-components'

import { SectionStatic } from '../grid'
import { Button } from '../button'

import {
	StyledTitle,
	StyledText,
	StyledRow,
	StyledColumn,
} from './style'

export const CallToAction = withTheme(({ theme }) => (
	<SectionStatic background={theme.colors.darkBlue}>
		<StyledRow>
			<StyledColumn xs="12" lg="6">
				<StyledTitle>
					How much will your website cost?
				</StyledTitle>
				<StyledText>
					Get a no commitment quote today!
				</StyledText>
			</StyledColumn>
			<StyledColumn xs="12" lg="6">
				<Button yellow href="/contact">
					Request A Quote
				</Button>
			</StyledColumn>
		</StyledRow>
	</SectionStatic>
))
