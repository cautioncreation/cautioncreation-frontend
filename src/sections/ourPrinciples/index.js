import React from 'react'

import { SectionStatic, Row, Column } from '../../components/grid'

import puzzle from '../../images/svg/puzzle.svg'
import boss from '../../images/svg/boss.svg'
import hierarchy from '../../images/svg/hierarchy.svg'

import * as S from './style'

export const OurPrinciples = () => (
	<SectionStatic>
		<Row>
			<Column xs="12">
				<S.Title>
					Our Principles
				</S.Title>
				<S.Line />
			</Column>
			<Column xs="12" lg="4">

				<S.Subtitle>
					<S.Vector src={puzzle} alt="puzzle icon"/>
					Usability
				</S.Subtitle>
				<S.Paragraph>
					Whether the product is a simple website or a complicated application, usability is a key factor in the experience of your customers, and is an important consideration in how we develop applications.
				</S.Paragraph>
			</Column>
			<Column xs="12" lg="4">
				<S.Subtitle>
					<S.Vector src={hierarchy} alt="hierarchy icon"/>
					Optimization
				</S.Subtitle>
				<S.Paragraph>
					If a web page takes over three seconds to load, more than fifty percent of users will abandon the site. By optimizing your website or application, we ensure users not only stay on your site, but enjoy the experience.
				</S.Paragraph>
			</Column>
			<Column xs="12" lg="4">
				<S.Subtitle>
					<S.Vector src={boss} alt="man icon"/>
					Simplicity
				</S.Subtitle>
				<S.Paragraph>
					Never uderestimate the power of simplicity. A website designed with simplicity in mind will allow users to follow a more structured information flow, and interact with your site in a more meaningful way.
				</S.Paragraph>
			</Column>
		</Row>
	</SectionStatic>
)
