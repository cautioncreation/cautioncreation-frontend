import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import {
	StyledArticle,
} from './style'

export const ArticleContent = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="12">
					<StyledArticle source={data.content} />
			</Column>
		</Row>
	</SectionStatic>
)
