import React from 'react'

import { Container, SectionStatic, Row, Column } from '../grid'
import {
	StyledArticle
} from './style'

export const ArticleContent = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="0" md="1" lg="2.5" spacer />
			<Column xs="12" md="10" lg="7">
				<StyledArticle source={data.content} />
			</Column>
			<Column xs="0" md="1" lg="2.5" spacer />
		</Row>
	</SectionStatic>
)
