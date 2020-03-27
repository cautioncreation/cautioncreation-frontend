import React from 'react'

import { SectionStatic, Row, Column } from '../grid'
import { CodeRenderer } from '../codeRenderer'
import * as S from './style'

export const ArticleContent = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="12">
					<S.Article
						dangerouslySetInnerHTML={{__html: data}}
					/>
			</Column>
		</Row>
	</SectionStatic>
)
