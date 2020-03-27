import React from 'react'

import { Column } from '../grid'
import { Card } from '../card'

import * as S from './style'

export const ServiceCard = ({ service, price, paragraph, subtitle, features, hideFeatures }) => (
	<Column xs="12" md="6" lg="4">
		<Card>
			<S.Title dangerouslySetInnerHTML={{__html: service}}/>
			<S.Subtext>Starting At</S.Subtext>
			<S.Price dangerouslySetInnerHTML={{__html: price}}/>
			<S.Paragraph dangerouslySetInnerHTML={{__html: paragraph}}/>
			<S.Subtitle hideFeatures={hideFeatures} dangerouslySetInnerHTML={{__html: subtitle}}/>
			<S.ScrollWrapper hideFeatures={hideFeatures}>
				<S.ScrollContainer>
					{features.map((text) => (
						<S.ScrollText dangerouslySetInnerHTML={{__html: text}}/>
					))}
				</S.ScrollContainer>
			</S.ScrollWrapper>
			<S.LinkContainer>
				<S.Link href="/contact">Get Started</S.Link>
			</S.LinkContainer>
		</Card>
	</Column>
)
