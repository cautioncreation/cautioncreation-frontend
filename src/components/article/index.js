import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import {
	StyledArticle
} from './style'

export const Article = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="0" md="1" lg="2.5" spacer />
			<Column xs="12" md="10" lg="7">
				<StyledArticle source={data} />
			</Column>
			<Column xs="0" md="1" lg="2.5" spacer />
		</Row>
	</SectionStatic>
)
