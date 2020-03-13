import React from 'react'

import { SectionStatic, Row, Column } from '../grid'

import {
	StyledQuestionColumn,
	StyledTitle,
	StyledLine,
	StyledParagraph,
} from './style'

export const MaintenanceParagraph = () => (
	<SectionStatic>
		<Row>
			<Column xs="12" lg="4">
				<StyledTitle>
					Your Website Needs Proper Maintenance
					<StyledLine />
				</StyledTitle>
			</Column>
			<StyledQuestionColumn xs="12" lg="8">
				<StyledParagraph>
					Many business owners, especially of small businesses, make the assumption that proper website maintenance is unneeded. That couldn't be further from the truth. Not only will a proper maintenance package protect you from malicious third-parties, it will make doing your day-to-day web tasks more efficient, and in some cases may automate them completely. That means you have more free time to manage your company and grow revenue!
				</StyledParagraph>
			</StyledQuestionColumn>
		</Row>
	</SectionStatic>
)
