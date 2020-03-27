import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'
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
