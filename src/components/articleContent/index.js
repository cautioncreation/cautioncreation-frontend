import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import { CodeRenderer } from '../codeRenderer'
import {
	StyledArticle,
} from './style'

export const ArticleContent = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="12">
					<StyledArticle
						dangerouslySetInnerHTML={{__html: data}}
					/>
			</Column>
		</Row>
	</SectionStatic>
)
